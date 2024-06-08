import { Job } from '@rlanz/bull-queue'
import Tenant from '#models/backoffice/tenant'

interface InstallTenantPayload {
  tenantId: string
}

export default class InstallTenant extends Job {
  static get $$filepath() {
    return import.meta.url
  }

  async handle(payload: InstallTenantPayload): Promise<void> {
    const tenant = await Tenant.findOrFail(payload.tenantId)
    await tenant.install()
  }

  async rescue(payload: InstallTenantPayload): Promise<void> {
    console.log(`Failed to install tenant ${payload.tenantId}`)
  }
}
