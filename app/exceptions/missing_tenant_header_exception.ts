import multitenancyConfig from '#config/multitenancy'
import { Exception } from '@adonisjs/core/exceptions'

export default class MissingTenantHeaderException extends Exception {
  static readonly status = 400

  static readonly code = 'E_MISSING_TENANT_HEADER'

  static readonly message = `Missing ${multitenancyConfig.tenantHeaderKey} header`
}
