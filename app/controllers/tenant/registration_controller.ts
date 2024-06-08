import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/tenant/user'
import * as validator from '#validators/tenant/registration'

export default class RegistrationController {
  async store({ request }: HttpContext) {
    const data = await request.validateUsing(validator.store)
    return new User().merge(data).save()
  }
}
