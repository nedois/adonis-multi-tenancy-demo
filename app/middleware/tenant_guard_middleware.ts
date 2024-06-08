import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class TenantGuardMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    // This will throw an exception if the tenant header is missing
    // or the tenant does not exists
    // See: extensions/request.ts for more details
    await request.tenant()

    return next()
  }
}
