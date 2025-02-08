import multitenancyConfig from '#config/multitenancy'
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
    [multitenancyConfig.centralConnectionName]: {
      ...defaultConnectionOptions,
      searchPath: [multitenancyConfig.centralSchemaName],
      migrations: {
        naturalSort: true,
        paths: ['database/migrations/central'],
      },
      seeders: {
        paths: ['database/seeders/central'],
      },
    },

    [multitenancyConfig.backofficeConnectionName]: {
      ...defaultConnectionOptions,
      searchPath: [multitenancyConfig.backofficeSchemaName],
      migrations: {
        naturalSort: true,
        paths: ['database/migrations/backoffice'],
      },
      seeders: {
        paths: ['database/seeders/backoffice'],
      },
    },

    tenant: {
      ...defaultConnectionOptions,
      searchPath: [`${multitenancyConfig.tenantSchemaPrefix}_tenantId`],
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
