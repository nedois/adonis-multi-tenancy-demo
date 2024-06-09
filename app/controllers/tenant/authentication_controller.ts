import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/tenant/user'
import * as validator from '#validators/tenant/authentication'

export default class AuthenticationController {
  async store({ request }: HttpContext) {
    const { email, password, remember } = await request.validateUsing(validator.store)

    const user = await User.verifyCredentials(email, password)

    return User.accessTokens.create(user, ['*'], {
      expiresIn: remember ? '30d' : '1d',
    })
  }

  async delete({ auth }: HttpContext) {
    const user = auth.use('tenant').getUserOrFail()
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
  }
}
