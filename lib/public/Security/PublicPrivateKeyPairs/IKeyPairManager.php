<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Security\PublicPrivateKeyPairs;

use OCP\Security\PublicPrivateKeyPairs\Exceptions\KeyPairConflictException;
use OCP\Security\PublicPrivateKeyPairs\Exceptions\KeyPairNotFoundException;
use OCP\Security\PublicPrivateKeyPairs\Model\IKeyPair;

/**
 * IKeyPairManager contains a group of method to create/manage/store internal public/private key pair.
 *
 * @since 30.0.0
 */
interface IKeyPairManager {

	/**
	 * generate public/private key pair.
	 * throws exception if key pair already exist
	 *
	 * @param string $app appId
	 * @param string $name key name
	 * @param array $options algorithms, metadata
	 *
	 * @return IKeyPair
	 * @throws KeyPairConflictException if a key already exist
	 * @since 30.0.0
	 */
	public function generateKeyPair(string $app, string $name, array $options = []): IKeyPair;

	/**
	 * returns if key pair is known.
	 *
	 * @param string $app appId
	 * @param string $name key name
	 *
	 * @return bool TRUE if key pair exists in database
	 * @since 30.0.0
	 */
	public function hasKeyPair(string $app, string $name): bool;

	/**
	 * return key pair from database based on $app and $name.
	 * throws exception if key pair does not exist
	 *
	 * @param string $app appId
	 * @param string $name key name
	 *
	 * @return IKeyPair
	 * @throws KeyPairNotFoundException if key pair is not known
	 * @since 30.0.0
	 */
	public function getKeyPair(string $app, string $name): IKeyPair;

	/**
	 * delete key pair from database
	 *
	 * @param string $app appid
	 * @param string $name key name
	 *
	 * @since 30.0.0
	 */
	public function deleteKeyPair(string $app, string $name): void;

	/**
	 * test key pair by encrypting/decrypting a string
	 *
	 * @param IKeyPair $keyPair keypair to test
	 *
	 * @return bool
	 * @since 30.0.0
	 */
	public function testKeyPair(IKeyPair $keyPair): bool;
}
