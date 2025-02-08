import CentralBaseModel from '#models/central/central_base_model'
import { column } from '@adonisjs/lucid/orm'

export default class Country extends CentralBaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare iso: string
}
