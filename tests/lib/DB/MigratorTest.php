<?php

/**
 * SPDX-FileCopyrightText: 2017-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace Test\DB;

use Doctrine\DBAL\Exception;
use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Platforms\OraclePlatform;
use Doctrine\DBAL\Platforms\SQLitePlatform;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Schema\SchemaConfig;
use OC\DB\Migrator;
use OC\DB\OracleMigrator;
use OC\DB\SQLiteMigrator;
use OC\DB\TDoctrineParameterTypeMap;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\Types;
use OCP\IConfig;
use OCP\Security\ISecureRandom;

/**
 * Class MigratorTest
 *
 * @group DB
 *
 * @package Test\DB
 */
class MigratorTest extends \Test\TestCase {
	use TDoctrineParameterTypeMap;

	/**
	 * @var \Doctrine\DBAL\Connection $connection
	 */
	private $connection;

	/**
	 * @var IConfig
	 **/
	private $config;

	/** @var string */
	private $tableName;

	/** @var string */
	private $tableNameTmp;

	protected function setUp(): void {
		parent::setUp();

		$this->config = \OC::$server->getConfig();
		$this->connection = \OC::$server->get(\OC\DB\Connection::class);

		$this->tableName = $this->getUniqueTableName();
		$this->tableNameTmp = $this->getUniqueTableName();
	}

	private function getMigrator(): Migrator {
		$platform = $this->connection->getDatabasePlatform();
		$random = \OC::$server->get(ISecureRandom::class);
		$dispatcher = \OC::$server->get(\OCP\EventDispatcher\IEventDispatcher::class);
		if ($platform instanceof SQLitePlatform) {
			return new SQLiteMigrator($this->connection, $this->config, $dispatcher);
		} elseif ($platform instanceof OraclePlatform) {
			return new OracleMigrator($this->connection, $this->config, $dispatcher);
		}
		return new Migrator($this->connection, $this->config, $dispatcher);
	}

	private function getUniqueTableName() {
		return strtolower($this->getUniqueID($this->config->getSystemValueString('dbtableprefix', 'oc_') . 'test_'));
	}

	protected function tearDown(): void {
		// Try to delete if exists (IF EXISTS NOT SUPPORTED IN ORACLE)
		try {
			$this->connection->executeStatement('DROP TABLE ' . $this->connection->quoteIdentifier($this->tableNameTmp));
		} catch (Exception $e) {
		}

		try {
			$this->connection->executeStatement('DROP TABLE ' . $this->connection->quoteIdentifier($this->tableName));
		} catch (Exception $e) {
		}
		parent::tearDown();
	}

	/**
	 * @return \Doctrine\DBAL\Schema\Schema[]
	 */
	private function getDuplicateKeySchemas() {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer');
		$table->addColumn('name', 'string');
		$table->addIndex(['id'], $this->tableName . '_id');

		$endSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $endSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer');
		$table->addColumn('name', 'string');
		$table->addUniqueIndex(['id'], $this->tableName . '_id');

		return [$startSchema, $endSchema];
	}

	/**
	 * @return \Doctrine\DBAL\Schema\Schema[]
	 */
	private function getChangedTypeSchema($from, $to) {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', $from);
		$table->addColumn('name', 'string');
		$table->addIndex(['id'], $this->tableName . '_id');

		$endSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $endSchema->createTable($this->tableName);
		$table->addColumn('id', $to);
		$table->addColumn('name', 'string');
		$table->addIndex(['id'], $this->tableName . '_id');

		return [$startSchema, $endSchema];
	}


	private function getSchemaConfig() {
		$config = new SchemaConfig();
		$config->setName($this->connection->getDatabase());
		return $config;
	}

	public function testUpgrade() {
		[$startSchema, $endSchema] = $this->getDuplicateKeySchemas();
		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		$this->connection->insert($this->tableName, ['id' => 1, 'name' => 'foo']);
		$this->connection->insert($this->tableName, ['id' => 2, 'name' => 'bar']);
		$this->connection->insert($this->tableName, ['id' => 3, 'name' => 'qwerty']);

		$migrator->migrate($endSchema);
		$this->addToAssertionCount(1);
	}

	public function testUpgradeDifferentPrefix() {
		$oldTablePrefix = $this->config->getSystemValueString('dbtableprefix', 'oc_');

		$this->config->setSystemValue('dbtableprefix', 'ownc_');
		$this->tableName = strtolower($this->getUniqueID($this->config->getSystemValueString('dbtableprefix') . 'test_'));

		[$startSchema, $endSchema] = $this->getDuplicateKeySchemas();
		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		$this->connection->insert($this->tableName, ['id' => 1, 'name' => 'foo']);
		$this->connection->insert($this->tableName, ['id' => 2, 'name' => 'bar']);
		$this->connection->insert($this->tableName, ['id' => 3, 'name' => 'qwerty']);

		$migrator->migrate($endSchema);
		$this->addToAssertionCount(1);

		$this->config->setSystemValue('dbtableprefix', $oldTablePrefix);
	}

	public function testInsertAfterUpgrade() {
		[$startSchema, $endSchema] = $this->getDuplicateKeySchemas();
		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		$migrator->migrate($endSchema);

		$this->connection->insert($this->tableName, ['id' => 1, 'name' => 'foo']);
		$this->connection->insert($this->tableName, ['id' => 2, 'name' => 'bar']);
		try {
			$this->connection->insert($this->tableName, ['id' => 2, 'name' => 'qwerty']);
			$this->fail('Expected duplicate key insert to fail');
		} catch (Exception $e) {
			$this->addToAssertionCount(1);
		}
	}

	public function testAddingPrimaryKeyWithAutoIncrement() {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer');
		$table->addColumn('name', 'string');

		$endSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $endSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer', ['autoincrement' => true]);
		$table->addColumn('name', 'string');
		$table->setPrimaryKey(['id']);

		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		$migrator->migrate($endSchema);

		$this->addToAssertionCount(1);
	}

	public function testReservedKeywords() {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer', ['autoincrement' => true]);
		$table->addColumn('user', 'string', ['length' => 255]);
		$table->setPrimaryKey(['id']);

		$endSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $endSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer', ['autoincrement' => true]);
		$table->addColumn('user', 'string', ['length' => 64]);
		$table->setPrimaryKey(['id']);

		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		$migrator->migrate($endSchema);

		$this->addToAssertionCount(1);
	}

	/**
	 * Test for nextcloud/server#36803
	 */
	public function testColumnCommentsInUpdate() {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer', ['autoincrement' => true, 'comment' => 'foo']);
		$table->setPrimaryKey(['id']);

		$endSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $endSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer', ['autoincrement' => true, 'comment' => 'foo']);
		// Assert adding comments on existing tables work (or at least does not throw)
		$table->addColumn('time', 'integer', ['comment' => 'unix-timestamp', 'notnull' => false]);
		$table->setPrimaryKey(['id']);

		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		$migrator->migrate($endSchema);

		$this->addToAssertionCount(1);
	}

	public function testAddingForeignKey() {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', 'integer', ['autoincrement' => true]);
		$table->addColumn('name', 'string');
		$table->setPrimaryKey(['id']);

		$fkName = "fkc";
		$tableFk = $startSchema->createTable($this->tableNameTmp);
		$tableFk->addColumn('fk_id', 'integer');
		$tableFk->addColumn('name', 'string');
		$tableFk->addForeignKeyConstraint($this->tableName, ['fk_id'], ['id'], [], $fkName);

		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);


		$this->assertTrue($startSchema->getTable($this->tableNameTmp)->hasForeignKey($fkName));
	}

	public function dataNotNullEmptyValuesFailOracle(): array {
		return [
			[IQueryBuilder::PARAM_BOOL, true, Types::BOOLEAN, false],
			[IQueryBuilder::PARAM_BOOL, false, Types::BOOLEAN, true],

			[IQueryBuilder::PARAM_STR, 'foo', Types::STRING, false],
			[IQueryBuilder::PARAM_STR, '', Types::STRING, true],

			[IQueryBuilder::PARAM_INT, 1234, Types::INTEGER, false],
			[IQueryBuilder::PARAM_INT, 0, Types::INTEGER, false], // Integer 0 is not stored as Null and therefor works

			[IQueryBuilder::PARAM_JSON, '{"a": 2}', Types::JSON, false],
		];
	}

	/**
	 * @dataProvider dataNotNullEmptyValuesFailOracle
	 *
	 * @param int|string $parameterType
	 * @param bool|int|string $value
	 * @param string $columnType
	 * @param bool $oracleThrows
	 */
	public function testNotNullEmptyValuesFailOracle(int|string $parameterType, bool|int|string $value, string $columnType, bool $oracleThrows): void {
		$startSchema = new Schema([], [], $this->getSchemaConfig());
		$table = $startSchema->createTable($this->tableName);
		$table->addColumn('id', Types::BIGINT);
		$table->addColumn('will_it_blend', $columnType, [
			'notnull' => true,
		]);
		$table->addIndex(['id'], $this->tableName . '_id');

		$migrator = $this->getMigrator();
		$migrator->migrate($startSchema);

		if ($oracleThrows && $this->connection->getDatabasePlatform() instanceof OraclePlatform) {
			// Oracle can not store false|empty string in notnull columns
			$this->expectException(\Doctrine\DBAL\Exception\NotNullConstraintViolationException::class);
		}

		$this->connection->insert(
			$this->tableName,
			['id' => 1, 'will_it_blend' => $value],
			['id' => ParameterType::INTEGER, 'will_it_blend' => $this->convertParameterTypeToDoctrine($parameterType)],
		);

		$this->addToAssertionCount(1);
	}
}
