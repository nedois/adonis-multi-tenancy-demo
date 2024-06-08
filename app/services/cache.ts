import { BentoCache, bentostore } from 'bentocache'
import { memoryDriver } from 'bentocache/drivers/memory'
import { redisBusDriver, redisDriver } from 'bentocache/drivers/redis'
import redisConfig from '#config/redis'

export default new BentoCache({
  default: 'cache',
  stores: {
    cache: bentostore()
      // Your L1 Cache. Here, an in-memory cache with
      // a maximum size of 10Mb
      .useL1Layer(memoryDriver({ maxSize: 10 * 1024 * 1024 }))
      // Your L2 Cache. Here, a Redis cache
      .useL2Layer(redisDriver({ connection: redisConfig.connections.cache }))
      // Finally, the bus to synchronize the L1 caches between
      // the different instances of your application
      .useBus(redisBusDriver({ connection: redisConfig.connections.cache })),
  },
})
