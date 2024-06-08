/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
  TENANT_HEADER_KEY: Env.schema.string(),

  // Postgres
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string(),
  DB_SSL: Env.schema.boolean.optional(),

  // Bull queue
  QUEUE_REDIS_HOST: Env.schema.string({ format: 'host' }),
  QUEUE_REDIS_PORT: Env.schema.number(),
  QUEUE_REDIS_USERNAME: Env.schema.string.optional(),
  QUEUE_REDIS_PASSWORD: Env.schema.string.optional(),
  QUEUE_REDIS_DB: Env.schema.number(),

  // Redis
  REDIS_HOST: Env.schema.string({ format: 'host' }),
  REDIS_PORT: Env.schema.number(),
  REDIS_USERNAME: Env.schema.string.optional(),
  REDIS_PASSWORD: Env.schema.string.optional(),

  // Cache
  CACHE_REDIS_HOST: Env.schema.string({ format: 'host' }),
  CACHE_REDIS_PORT: Env.schema.number(),
  CACHE_REDIS_USERNAME: Env.schema.string.optional(),
  CACHE_REDIS_PASSWORD: Env.schema.string.optional(),
  CACHE_REDIS_DB: Env.schema.number(),
})
