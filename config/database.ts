import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const defaultConnectionOptions = {
  client: 'pg',
  connection: {
    host: env.get('DB_HOST'),
    port: env.get('DB_PORT'),
    user: env.get('DB_USER'),
    password: env.get('DB_PASSWORD'),
    database: env.get('DB_DATABASE'),
    ssl: env.get('DB_SSL'),
  },
} as const

const dbConfig = defineConfig({
  connection: 'tenant',
  connections: {
    backoffice: {
      ...defaultConnectionOptions,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations/public', 'database/migrations/backoffice'],
      },
      seeders: {
        paths: ['database/seeders/public', 'database/seeders/backoffice'],
      },
      searchPath: ['backoffice', 'public'],
    },

    tenant: {
      ...defaultConnectionOptions,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations/tenant'],
      },
      seeders: {
        paths: ['database/seeders/tenant'],
      },
    },
  },
})

export default dbConfig
