import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import User from 'App/Modules/Users/Models/User'

export default class Package extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public recipient: string

  @column()
  public address: string

  @column()
  public status: 0 | 1 | 2

  @column()
  public postedDate: Date

  @column()
  public withdrawalDate: Date

  @column()
  public deliveryDate: Date

  @attachment()
  public picture: AttachmentContract

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @beforeCreate()
  public static async defaultStatus(package_: Package) {
    package_.status = 0
  }
}
