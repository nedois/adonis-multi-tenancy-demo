import { BaseModel } from '@adonisjs/lucid/orm'

export default class BackofficeBaseModel extends BaseModel {
  static readonly connection = 'backoffice'
}
