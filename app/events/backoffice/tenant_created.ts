import { BaseEvent } from '@adonisjs/core/events'
import Tenant from '#models/backoffice/tenant'

export default class TenantCreated extends BaseEvent {
  constructor(readonly tenant: Tenant) {
    super()
  }
}
