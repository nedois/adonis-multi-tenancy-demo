import multitenancyConfig from '#config/multitenancy'
import MissingTenantHeaderException from '#exceptions/missing_tenant_header_exception'
import DefaultLucidAdapter from '#models/adapters/default_lucid_adapter'
import Tenant from '#models/backoffice/tenant'
import { HttpContext } from '@adonisjs/core/http'
import type { LucidModel, ModelAdapterOptions } from '@adonisjs/lucid/types/model'
import assert from 'node:assert'

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
    // Otherwise, use the default connection to handle seeders
    // and migrations.
    // The default connection should always be "tenant" in config file
    if (context) {
      const tenantHeader = context.request.header(multitenancyConfig.tenantHeaderKey)
      assert(tenantHeader, new MissingTenantHeaderException())

      tenantConnectionName = Tenant.connectionNameFromHeader(tenantHeader)
    }

    const connection = options?.connection || modelConstructor?.connection || tenantConnectionName

    return this.db.connection(connection)
  }
}
