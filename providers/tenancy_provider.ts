import type { ApplicationService } from '@adonisjs/core/types'
import { Database } from '@adonisjs/lucid/database'
import BackofficeAdapter from '#models/adapters/backoffice_adapter'
import BackofficeBaseModel from '#models/backoffice/backoffice_base_model'
import TenantAdapter from '#models/adapters/tenant_adapter'
import TenantBaseModel from '#models/tenant/tenant_base_model'

export default class TenancyProvider {
  constructor(protected app: ApplicationService) {}

  async boot() {
    const db = await this.app.container.make(Database)
    BackofficeBaseModel.$adapter = new BackofficeAdapter(db)
    TenantBaseModel.$adapter = new TenantAdapter(db)
  }
}
