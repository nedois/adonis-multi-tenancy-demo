import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'countries'

  async up() {
    this.schema.withSchema('public').createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))
      table.string('name').unique().notNullable()
      table.string('iso', 2).unique().notNullable()
    })
  }

  async down() {
    this.schema.withSchema('public').dropTable(this.tableName)
  }
}
