import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { AdminFactory } from '#database/factories/backoffice/admin_factory'

export default class extends BaseSeeder {
  async run() {
    await Promise.all([
      AdminFactory.merge({ email: 'john.doe@example.com' })
        .create()
        .catch(() => null), // Ignore unique constraint error
      AdminFactory.createMany(10),
    ])
  }
}
