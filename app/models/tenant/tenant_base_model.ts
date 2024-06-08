import { BaseModel } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import TenantAdapter from '#models/adapters/tenant_adapter'

export default class TenantBaseModel extends BaseModel {
  static readonly $adapter = new TenantAdapter(db)
}
