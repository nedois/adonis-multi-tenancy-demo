import type { HttpContext } from '@adonisjs/core/http'
import * as validator from '#validators/backoffice/tenant'
import Tenant from '#models/backoffice/tenant'

export default class TenantsController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    return Tenant.query().paginate(page, limit)
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(validator.store)
    const tenant = await new Tenant().merge(data).save()

    // FIXME: This should be a job
    await tenant.install()

    return tenant
  }
}
