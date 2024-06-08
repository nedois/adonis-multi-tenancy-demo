import { BaseModel } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import BackofficeAdapter from '#models/adapters/backoffice_adapter'

export default class BackofficeBaseModel extends BaseModel {
  static readonly $adapter = new BackofficeAdapter(db)
}
