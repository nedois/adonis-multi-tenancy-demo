import factory from '@adonisjs/lucid/factories'
import User from '#models/tenant/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => ({
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    password: '123456789',
  }))
  .build()
