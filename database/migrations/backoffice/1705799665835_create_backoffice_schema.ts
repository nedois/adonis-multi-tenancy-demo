import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected schemaName = 'backoffice'

  async up() {
    this.schema.raw(`CREATE SCHEMA IF NOT EXISTS ${this.schemaName}`)
  }

  async down() {
    this.schema.raw(`DROP SCHEMA IF EXISTS ${this.schemaName} CASCADE`)
  }
}
