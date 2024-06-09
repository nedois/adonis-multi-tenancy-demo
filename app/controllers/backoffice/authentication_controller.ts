import type { HttpContext } from '@adonisjs/core/http'
import Admin from '#models/backoffice/admin'
import * as validator from '#validators/backoffice/authentication'

export default class AuthenticationController {
  async store({ request }: HttpContext) {
    const { email, password, remember } = await request.validateUsing(validator.store)

    const admin = await Admin.verifyCredentials(email, password)

    return Admin.accessTokens.create(admin, ['*'], {
      expiresIn: remember ? '30d' : '1d',
    })
  }

  async delete({ auth }: HttpContext) {
    const admin = auth.use('backoffice').getUserOrFail()
    await Admin.accessTokens.delete(admin, admin.currentAccessToken.identifier)
  }
}
