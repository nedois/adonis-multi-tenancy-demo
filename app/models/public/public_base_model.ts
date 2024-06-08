import { BaseModel, CamelCaseNamingStrategy } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import PublicAdapter from '#models/adapters/public_adapter'
import { LucidModel } from '@adonisjs/lucid/types/model'

// Needed to handle relationships from non public entities
class PublicNamingStragegy extends CamelCaseNamingStrategy {
  tableName(model: LucidModel): string {
    return `public.${super.tableName(model)}`
  }
}

export default class PublicBaseModel extends BaseModel {
  static readonly $adapter = new PublicAdapter(db)

  static readonly namingStrategy = new PublicNamingStragegy()
}
