import { defineConfig } from '@adonisjs/auth'
import { tokensGuard, tokensUserProvider } from '@adonisjs/auth/access_tokens'
import type { InferAuthEvents, Authenticators as DefaultAuthenticators } from '@adonisjs/auth/types'

const authConfig = defineConfig({
  default: 'backoffice',
  guards: {
    backoffice: tokensGuard({
      provider: tokensUserProvider({
        tokens: 'accessTokens',
        model: () => import('#models/backoffice/admin'),
      }),
    }),
  },
})

export default authConfig

/**
 * Inferring types from the configured auth
 * guards.
 */
declare module '@adonisjs/auth/types' {
  interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}

declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<DefaultAuthenticators> {}
}
