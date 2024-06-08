import { BaseModel } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import PublicAdapter from '#models/adapters/public_adapter'

export default class PublicBaseModel extends BaseModel {
  static readonly $adapter = new PublicAdapter(db)
}
