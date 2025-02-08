import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'countries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))
      table.string('name').unique().notNullable()
      table.string('iso', 2).unique().notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
