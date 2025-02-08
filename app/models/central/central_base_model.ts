import multitenancyConfig from '#config/multitenancy'
import { BaseModel, CamelCaseNamingStrategy } from '@adonisjs/lucid/orm'
import { LucidModel } from '@adonisjs/lucid/types/model'

// Needed to handle relationships with non central tables
class CentralNamingStragegy extends CamelCaseNamingStrategy {
  tableName(model: LucidModel): string {
    return `${multitenancyConfig.centralSchemaName}.${super.tableName(model)}`
  }
}

export default class CentralBaseModel extends BaseModel {
  static readonly connection = multitenancyConfig.centralConnectionName
  static readonly namingStrategy = new CentralNamingStragegy()
}
