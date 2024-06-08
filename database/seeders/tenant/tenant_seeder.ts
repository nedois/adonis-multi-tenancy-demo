import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/tenant/user_factory'

export default class extends BaseSeeder {
  async run() {
    await UserFactory.createMany(10)
  }
}
