import assert from 'node:assert'
import { DateTime } from 'luxon'
import db from '@adonisjs/lucid/services/db'
import app from '@adonisjs/core/services/app'
import { MigrationRunner } from '@adonisjs/lucid/migration'
import type { MigratorOptions } from '@adonisjs/lucid/types/migrator'
import type { PostgreConfig } from '@adonisjs/lucid/types/database'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import cache from '#services/cache'

/**
 * Tenant can't extend the BackofficeBaseModel
 * because the database instance in the adapter
 * resolves to undefined, find the reason why
 */
export default class Tenant extends BaseModel {
  static readonly connectionNamePrefix = 'tenant_'

  static readonly schemaNamePrefix = 'tenant_'

  static readonly table = 'backoffice.tenants'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column({ prepare: (value: string) => value.toLowerCase() })
  declare email: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  /** Returns the connection name from the header value */
  static connectionNameFromHeader(header: string) {
    return `${Tenant.connectionNamePrefix}${header}`
  }

  /** Returns the connection name of the tenant */
  private get connectionName() {
    return `${Tenant.connectionNamePrefix}${this.id}`
  }

  /** Returns the schema name of the tenant */
  get schemaName() {
    return `${Tenant.schemaNamePrefix}${this.id}`
  }

  /** Create tenant schema in database */
  private async createSchema() {
    await db.rawQuery(`CREATE SCHEMA "${this.schemaName}"`)
  }

  /** Drop tenant schema in database */
  private async dropSchema() {
    await db.rawQuery(`DROP SCHEMA IF EXISTS "${this.schemaName}" CASCADE`)
  }

  /** Close tenant connection */
  async closeConnection() {
    await db.manager.close(this.connectionName)
  }

  /** Run tenant migrations */
  async migrate(options: Omit<MigratorOptions, 'connectionName'>) {
    const migrator = new MigrationRunner(db, app, {
      ...options,
      connectionName: this.connectionName,
    })

    await migrator.run()

    if (migrator.error) {
      throw migrator.error
    }

    return migrator
  }

  /**
   * Returns the tenant connection, create a new connection
   * if it doesn't exist and cache it.
   */
  getConnection() {
    // Returns the connection if it already exists
    if (db.manager.has(this.connectionName)) {
      return db.connection(this.connectionName)
    }

    // Get default tenant configuration from the config
    // file (config/dabatase.ts)
    const config = db.manager.get('tenant')?.config
    assert(config, 'Unable to get connection config. Make sure to define it in the config file')

    // Add tenant connection to the manager
    db.manager.add(this.connectionName, {
      ...config,
      // Set the search path to the tenant schema so that
      // model tables are searched only in the tenant schema
      searchPath: [this.schemaName],
    } as PostgreConfig)

    return db.connection(this.connectionName)
  }

  /**
   * After creating a new tenant, normally you should call this method
   * to setup the tenant schema and connection
   */
  async install() {
    // 1. Create the tenant schema
    await this.createSchema()

    // 2. Create the tenant connection
    this.getConnection()

    // 3. Run migrations
    await this.migrate({ direction: 'up' })

    // 4. Run production seed
    // TODO: find a way to run seeds programmatically
  }

  /**
   * After deleting a tenant, normally you should call this method
   * for the cleanup
   */
  async uninstall() {
    // 1. Close tenant connection
    await this.closeConnection()

    // 2. Drop tenant schema
    await this.dropSchema()
  }

  /** Resolve the tenant from the header */
  static async findFromHeader(header: string) {
    return (
      cache
        .namespace('tenants')
        .getOrSet({
          key: `tenant:${header}`,
          factory: () => Tenant.query().where('id', header).firstOrFail(),
        })
        // Cached tenant is a plain object, merge it with the model
        .then((tenant) => new Tenant().merge(tenant))
    )
  }
}
