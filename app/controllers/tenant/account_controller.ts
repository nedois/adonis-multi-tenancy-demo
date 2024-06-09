import type { HttpContext } from '@adonisjs/core/http'

export default class AccountController {
  async show({ auth }: HttpContext) {
    return auth.use('tenant').getUserOrFail()
  }
}
