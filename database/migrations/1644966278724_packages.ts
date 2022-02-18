import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Packages extends BaseSchema {
  protected tableName = 'packages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('recipient')
      table.text('address')
      table.integer('status').defaultTo(0)
      table.timestamp('posted_date')
      table.timestamp('withdrawal_date')
      table.timestamp('delivery_date')
      table.json('picture').nullable()
      table.integer('user_id').unsigned().references('users.id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
