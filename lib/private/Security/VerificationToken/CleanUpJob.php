<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2021 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

namespace OC\Security\VerificationToken;

use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IConfig;
use OCP\ILogger;
use OCP\IUserManager;
use OCP\Security\VerificationToken\InvalidTokenException;
use OCP\Security\VerificationToken\IVerificationToken;

class CleanUpJob extends \OCP\BackgroundJob\Job {

	/** @var int */
	protected $runNotBefore;
	/** @var string */
	protected $userId;
	/** @var string */
	protected $subject;
	/** @var string */
	protected $pwdPrefix;
	/** @var IConfig */
	private $config;
	/** @var IVerificationToken */
	private $verificationToken;
	/** @var IUserManager */
	private $userManager;

	public function __construct(ITimeFactory $time, IConfig $config, IVerificationToken $verificationToken, IUserManager $userManager) {
		parent::__construct($time);
		$this->config = $config;
		$this->verificationToken = $verificationToken;
		$this->userManager = $userManager;
	}

	public function setArgument($argument) {
		parent::setArgument($argument);
		$args = \json_decode($argument, true);
		$this->userId = (string)$args['userId'];
		$this->subject = (string)$args['subject'];
		$this->pwdPrefix = (string)$args['pp'];
		$this->runNotBefore = (int)$args['notBefore'];
	}

	protected function run($argument) {
		try {
			$user = $this->userManager->get($this->userId);
			if ($user === null) {
				return;
			}
			$this->verificationToken->check('irrelevant', $user, $this->subject, $this->pwdPrefix);
		} catch (InvalidTokenException $e) {
			if ($e->getCode() === InvalidTokenException::TOKEN_EXPIRED) {
				// make sure to only remove expired tokens
				$this->config->deleteUserValue($this->userId, 'core', $this->subject);
			}
		}
	}

	public function execute($jobList, ILogger $logger = null) {
		if ($this->time->getTime() >= $this->runNotBefore) {
			$jobList->remove($this, $this->argument);
			parent::execute($jobList, $logger);
		}
	}
}
