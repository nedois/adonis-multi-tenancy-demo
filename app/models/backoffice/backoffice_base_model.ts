import multitenancyConfig from '#config/multitenancy'
import { BaseModel } from '@adonisjs/lucid/orm'

export default class BackofficeBaseModel extends BaseModel {
  static readonly connection = multitenancyConfig.backofficeConnectionName
}
