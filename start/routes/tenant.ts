import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AccountController = () => import('#controllers/tenant/account_controller')
const AuthenticationController = () => import('#controllers/tenant/authentication_controller')
const UsersController = () => import('#controllers/tenant/users_controller')
const RegistrationController = () => import('#controllers/tenant/registration_controller')

// Tenant routes
router
  .group(() => {
    // Login
    router.post('login', [AuthenticationController, 'store'])

    // Registration
    router.post('signup', [RegistrationController, 'store'])

    router
      .group(() => {
        // Logout
        router.delete('logout', [AuthenticationController, 'delete'])

        // Account
        router.get('account', [AccountController, 'show'])

        // Mange users
        router.resource('users', UsersController).apiOnly()
      })
      .use(middleware.auth({ guards: ['tenant'] }))
  })
  .prefix('tenant')
  .use(middleware.tenant())
