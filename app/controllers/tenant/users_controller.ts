import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/tenant/user'

export default class UsersController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    return User.query().paginate(page, limit)
  }
}
