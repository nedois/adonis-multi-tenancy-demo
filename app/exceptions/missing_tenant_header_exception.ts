import { Exception } from '@adonisjs/core/exceptions'
import env from '#start/env'

export default class MissingTenantHeaderException extends Exception {
  static readonly status = 400

  static readonly code = 'E_MISSING_TENANT_HEADER'

  static readonly message = `Missing ${env.get('TENANT_HEADER_KEY')} header`
}
