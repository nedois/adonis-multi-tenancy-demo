import queue from '@rlanz/bull-queue/services/main'
import TenantCreatedEvent from '#events/backoffice/tenant_created'
import InstallTenant from '#jobs/backoffice/install_tenant'

export default class TenantCreated {
  async handle(event: TenantCreatedEvent) {
    // 1. Queue tenant database and connection setup
    await queue.dispatch(InstallTenant, { tenantId: event.tenant.id })

    // 2. Send welcome email
    // ...
  }
}
