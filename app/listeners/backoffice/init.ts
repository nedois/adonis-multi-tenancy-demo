import emitter from '@adonisjs/core/services/emitter'

import TenantCreatedEvent from '#events/backoffice/tenant_created'

const TenantCreatedListener = () => import('#listeners/backoffice/tenant_created')

emitter.on(TenantCreatedEvent, [TenantCreatedListener])
