import multitenancyConfig from '#config/multitenancy';
import MissingTenantHeaderException from '#exceptions/missing_tenant_header_exception';
import Tenant from '#models/backoffice/tenant';
import { Request } from '@adonisjs/core/http';
import assert from 'node:assert';

declare module '@adonisjs/core/http' {
  interface Request {
    tenant(): Promise<Tenant>
  }
}

Request.macro('tenant', async function (this: Request) {
  // The header value is a unique identifier for the tenant
  // and is part of the connection name
  const header = this.header(multitenancyConfig.tenantHeaderKey)
  assert(header, new MissingTenantHeaderException())

  // Resolve the tenant from the header
  const tenant = await Tenant.findFromHeader(header)

  // Create tenant connection if need
  tenant.getConnection()

  return tenant
})
