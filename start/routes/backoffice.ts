import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AccountController = () => import('#controllers/backoffice/account_controller')
const AuthenticationController = () => import('#controllers/backoffice/authentication_controller')

// Backoffice routes
router
  .group(() => {
    // Login
    router.post('login', [AuthenticationController, 'store'])

    router
      .group(() => {
        // Logout
        router.delete('logout', [AuthenticationController, 'delete'])

        // Account
        router.get('account', [AccountController, 'show'])
      })
      .use(middleware.auth({ guards: ['backoffice'] }))
  })
  .prefix('backoffice')
