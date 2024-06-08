import env from '#start/env'
import { defineConfig } from '@adonisjs/redis'
import { InferConnections } from '@adonisjs/redis/types'

const redisConfig = defineConfig({
  connection: 'default',

  connections: {
    /*
    |--------------------------------------------------------------------------
    | The default connection
    |--------------------------------------------------------------------------
    |
    | The main connection you want to use to execute redis commands. The same
    | connection will be used by the session provider, if you rely on the
    | redis driver.
    |
    */
    default: {
      host: env.get('REDIS_HOST'),
      port: env.get('REDIS_PORT'),
      password: env.get('REDIS_PASSWORD', ''),
      username: env.get('REDIS_USERNAME', ''),
      db: 0,
      keyPrefix: '',
      retryStrategy(times) {
        return times > 10 ? null : times * 50
      },
    },

    queue: {
      host: env.get('QUEUE_REDIS_HOST'),
      port: env.get('QUEUE_REDIS_PORT'),
      username: env.get('QUEUE_REDIS_USERNAME'),
      password: env.get('QUEUE_REDIS_PASSWORD'),
      db: env.get('QUEUE_REDIS_DB'),
      keyPrefix: '',
      retryStrategy(times) {
        return times > 10 ? null : times * 50
      },
    },

    cache: {
      host: env.get('CACHE_REDIS_HOST'),
      port: env.get('CACHE_REDIS_PORT'),
      password: env.get('CACHE_REDIS_PASSWORD', ''),
      username: env.get('CACHE_REDIS_USERNAME', ''),
      db: env.get('CACHE_REDIS_DB'),
      keyPrefix: '',
      retryStrategy(times) {
        return times > 10 ? null : times * 50
      },
    },
  },
})

export default redisConfig

declare module '@adonisjs/redis/types' {
  export interface RedisConnections extends InferConnections<typeof redisConfig> {}
}
