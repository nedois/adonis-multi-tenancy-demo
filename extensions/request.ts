import assert from 'node:assert'
import Tenant from '#models/backoffice/tenant'
import { Request } from '@adonisjs/core/http'
import { errors } from '@adonisjs/core'
import env from '#start/env'

declare module '@adonisjs/core/http' {
  interface Request {
    tenant(): Promise<Tenant>
  }
}

Request.macro('tenant', async function (this: Request): Promise<Tenant> {
  // The header value is a unique identifier for the tenant
  // can be the id, domain or a custom unique string
  const header = this.header(env.get('TENANT_HEADER_KEY'))
  assert(
    header,
    new errors.E_HTTP_EXCEPTION(`Missing ${env.get('TENANT_HEADER_KEY')} header`, {
      status: 400,
      code: 'E_MISSING_TENANT_HEADER',
    })
  )

  // Resolve the tenant from the header
  const tenant = await Tenant.findFromHeader(header)

  // Create tenant connection if need
  tenant.getConnection()

  return tenant
})
