<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-FileCopyrightText: 2012 entreCables S.L. All rights reserved
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\DAV\Connector\Sabre;

use OCA\DAV\Upload\FutureFile;
use OCA\DAV\Upload\UploadFolder;
use OCP\Files\StorageNotAvailableException;
use Sabre\DAV\Exception\InsufficientStorage;
use Sabre\DAV\Exception\ServiceUnavailable;
use Sabre\DAV\INode;

/**
 * This plugin check user quota and deny creating files when they exceeds the quota.
 *
 * @author Sergio Cambra
 * @copyright Copyright (C) 2012 entreCables S.L. All rights reserved.
 * @license http://code.google.com/p/sabredav/wiki/License Modified BSD License
 */
class QuotaPlugin extends \Sabre\DAV\ServerPlugin {
	/** @var \OC\Files\View */
	private $view;

	/**
	 * Reference to main server object
	 *
	 * @var \Sabre\DAV\Server
	 */
	private $server;

	/**
	 * @param \OC\Files\View $view
	 */
	public function __construct($view) {
		$this->view = $view;
	}

	/**
	 * This initializes the plugin.
	 *
	 * This function is called by \Sabre\DAV\Server, after
	 * addPlugin is called.
	 *
	 * This method should set up the requires event subscriptions.
	 *
	 * @param \Sabre\DAV\Server $server
	 * @return void
	 */
	public function initialize(\Sabre\DAV\Server $server) {
		$this->server = $server;

		$server->on('beforeWriteContent', [$this, 'beforeWriteContent'], 10);
		$server->on('beforeCreateFile', [$this, 'beforeCreateFile'], 10);
		$server->on('beforeMove', [$this, 'beforeMove'], 10);
		$server->on('beforeCopy', [$this, 'beforeCopy'], 10);
	}

	/**
	 * Check quota before creating file
	 *
	 * @param string $uri target file URI
	 * @param resource $data data
	 * @param INode $parent Sabre Node
	 * @param bool $modified modified
	 */
	public function beforeCreateFile($uri, $data, INode $parent, $modified) {
		$request = $this->server->httpRequest;
		if ($parent instanceof UploadFolder && $request->getHeader('Destination')) {
			// If chunked upload and Total-Length header is set, use that
			// value for quota check. This allows us to also check quota while
			// uploading chunks and not only when the file is assembled.
			$length = $request->getHeader('OC-Total-Length');
			$destinationPath = $this->server->calculateUri($request->getHeader('Destination'));
			$quotaPath = $this->getPathForDestination($destinationPath);
			if ($quotaPath && is_numeric($length)) {
				return $this->checkQuota($quotaPath, (int)$length);
			}
		}

		if (!$parent instanceof Node) {
			return;
		}

		return $this->checkQuota($parent->getPath() . '/' . basename($uri));
	}

	/**
	 * Check quota before writing content
	 *
	 * @param string $uri target file URI
	 * @param INode $node Sabre Node
	 * @param resource $data data
	 * @param bool $modified modified
	 */
	public function beforeWriteContent($uri, INode $node, $data, $modified) {
		if (!$node instanceof Node) {
			return;
		}

		return $this->checkQuota($node->getPath());
	}

	/**
	 * Check if we're moving a FutureFile in which case we need to check
	 * the quota on the target destination.
	 */
	public function beforeMove(string $sourcePath, string $destinationPath): bool {
		$sourceNode = $this->server->tree->getNodeForPath($sourcePath);
		if (!$sourceNode instanceof FutureFile) {
			return true;
		}

		try {
			// The final path is not known yet, we check the quota on the parent
			$path = $this->getPathForDestination($destinationPath);
		} catch (\Exception $e) {
			return true;
		}

		return $this->checkQuota($path, $sourceNode->getSize());
	}

	/**
	 * Check quota on the target destination before a copy.
	 */
	public function beforeCopy(string $sourcePath, string $destinationPath): bool {
		$sourceNode = $this->server->tree->getNodeForPath($sourcePath);
		if (!$sourceNode instanceof Node) {
			return true;
		}

		try {
			$path = $this->getPathForDestination($destinationPath);
		} catch (\Exception $e) {
			return true;
		}

		return $this->checkQuota($path, $sourceNode->getSize());
	}

	private function getPathForDestination(string $destinationPath): string {
		// get target node for proper path conversion
		if ($this->server->tree->nodeExists($destinationPath)) {
			$destinationNode = $this->server->tree->getNodeForPath($destinationPath);
			if (!$destinationNode instanceof Node) {
				throw new \Exception('Invalid destination node');
			}
			return $destinationNode->getPath();
		}

		$parent = dirname($destinationPath);
		if ($parent === '.') {
			$parent = '';
		}

		$parentNode = $this->server->tree->getNodeForPath($parent);
		if (!$parentNode instanceof Node) {
			throw new \Exception('Invalid destination node');
		}

		return $parentNode->getPath();
	}


	/**
	 * This method is called before any HTTP method and validates there is enough free space to store the file
	 *
	 * @param string $path relative to the users home
	 * @param int|float|null $length
	 * @throws InsufficientStorage
	 * @return bool
	 */
	public function checkQuota(string $path, $length = null) {
		if ($length === null) {
			$length = $this->getLength();
		}

		if ($length) {
			[$parentPath, $newName] = \Sabre\Uri\split($path);
			if (is_null($parentPath)) {
				$parentPath = '';
			}
			$req = $this->server->httpRequest;

			// Strip any duplicate slashes
			$path = str_replace('//', '/', $path);

			// TODO: I suspect the below existence check more properly belongs in
			//       beforeCreateFile(), similar to what already exists in
			//       beforeCopy and beforeMove()
			// NOTE: && or || here is equivalent in terms of outcome (but && our intention)
			//       because only other times the full path SHOULD get to us here is when
			//       existence has already been confirmed - see beforeCopy() & beforeMove())
			if (($req->getHeader('Destination') === null || $req->getHeader('Destination') === '') && !$this->server->tree->nodeExists($path)) {
				$path = dirname($path);
			}

			$targetOwner = $this->view->getOwner($path);
			$freeSpace = $this->getFreeSpace($path);
			if ($freeSpace >= 0 && $length > $freeSpace) {
				if ($targetOwner !== \OC_User::getUser()) {
					throw new InsufficientStorage("Quota exceeded in $path (owner: $targetOwner), $length required, $freeSpace available");
				}
				throw new InsufficientStorage("Insufficient space in $path, $length required, $freeSpace available");
			}
		}

		return true;
	}

	public function getLength() {
		$req = $this->server->httpRequest;
		$length = $req->getHeader('X-Expected-Entity-Length');
		if (!is_numeric($length)) {
			$length = $req->getHeader('Content-Length');
			$length = is_numeric($length) ? $length : null;
		}

		$ocLength = $req->getHeader('OC-Total-Length');
		if (!is_numeric($ocLength)) {
			return $length;
		}
		if (!is_numeric($length)) {
			return $ocLength;
		}
		return max($length, $ocLength);
	}

	/**
	 * @param string $uri
	 * @return mixed
	 * @throws ServiceUnavailable
	 */
	public function getFreeSpace($uri) {
		try {
			$freeSpace = $this->view->free_space(ltrim($uri, '/'));
			return $freeSpace;
		} catch (StorageNotAvailableException $e) {
			throw new ServiceUnavailable($e->getMessage());
		}
	}
}
