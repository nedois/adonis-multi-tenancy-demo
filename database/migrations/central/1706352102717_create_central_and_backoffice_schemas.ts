import multitenancyConfig from '#config/multitenancy'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.createSchemaIfNotExists(multitenancyConfig.centralSchemaName)
    this.schema.createSchemaIfNotExists(multitenancyConfig.backofficeSchemaName)
  }

  async down() {
    this.schema.dropSchemaIfExists(multitenancyConfig.centralSchemaName)
    this.schema.dropSchemaIfExists(multitenancyConfig.backofficeSchemaName)
  }
}
