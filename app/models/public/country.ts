import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'
import PublicBaseModel from '#models/public/public_base_model'

export default class Country extends PublicBaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare iso: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
