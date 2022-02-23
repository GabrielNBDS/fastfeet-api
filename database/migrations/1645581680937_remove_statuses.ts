import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Packages extends BaseSchema {
  protected tableName = 'packages'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('status')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('status').defaultTo(0)
    })
  }
}
