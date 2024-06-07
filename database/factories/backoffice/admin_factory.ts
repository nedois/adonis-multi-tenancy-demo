import factory from '@adonisjs/lucid/factories'
import Admin from '#models/backoffice/admin'

export const AdminFactory = factory
  .define(Admin, async ({ faker }) => ({
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    password: '123456789',
  }))
  .build()
