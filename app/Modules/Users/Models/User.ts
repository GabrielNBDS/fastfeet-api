import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Package from 'App/Modules/Packages/Models/Package'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public name: string

  @column({ serializeAs: null })
  public password: string

  @column({ serializeAs: null })
  public role: 'admin' | 'user'

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Package)
  public packages: HasMany<typeof Package>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
