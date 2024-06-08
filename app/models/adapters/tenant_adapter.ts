import assert from 'node:assert'
import type { LucidModel, ModelAdapterOptions } from '@adonisjs/lucid/types/model'
import { HttpContext } from '@adonisjs/core/http'
import DefaultLucidAdapter from '#models/adapters/default_lucid_adapter'
import Tenant from '#models/backoffice/tenant'
import MissingTenantHeaderException from '#exceptions/missing_tenant_header_exception'
import env from '#start/env'

/**
 * This will scope the model to the current tenant
 */
export default class TenantAdapter extends DefaultLucidAdapter {
  override modelConstructorClient(modelConstructor: LucidModel, options?: ModelAdapterOptions) {
    if (options?.client) {
      return options.client
    }

    let tenantConnectionName: string | undefined

    const context = HttpContext.get()

    // Inside a request set the tenant connection name
    // from the header.
    // Seeders and migrations will pass the connection
    // name explicitly
    if (context) {
      const tenantHeader = context.request.header(env.get('TENANT_HEADER_KEY'))
      assert(tenantHeader, new MissingTenantHeaderException())

      tenantConnectionName = Tenant.connectionNameFromHeader(tenantHeader)
    }

    const connection = options?.connection || modelConstructor?.connection || tenantConnectionName

    return this.db.connection(connection)
  }
}
