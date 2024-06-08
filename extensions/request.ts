import assert from 'node:assert'
import Tenant from '#models/backoffice/tenant'
import { Request } from '@adonisjs/core/http'
import env from '#start/env'
import MissingTenantHeaderException from '#exceptions/missing_tenant_header_exception'

declare module '@adonisjs/core/http' {
  interface Request {
    tenant(): Promise<Tenant>
  }
}

Request.macro('tenant', async function (this: Request): Promise<Tenant> {
  // The header value is a unique identifier for the tenant
  // and is part of the connection name
  const header = this.header(env.get('TENANT_HEADER_KEY'))
  assert(header, new MissingTenantHeaderException())

  // Resolve the tenant from the header
  const tenant = await Tenant.findFromHeader(header)

  // Create tenant connection if need
  tenant.getConnection()

  return tenant
})
