import type { LucidModel, ModelAdapterOptions } from '@adonisjs/lucid/types/model'
import DefaultLucidAdapter from '#models/adapters/default_lucid_adapter'

/**
 * This will scope the model connection and queries to the public schema
 */
export default class PublicAdapter extends DefaultLucidAdapter {
  override modelConstructorClient(modelConstructor: LucidModel, options?: ModelAdapterOptions) {
    if (options?.client) {
      return options.client
    }
    const connection = options?.connection || modelConstructor?.connection || 'public'

    return this.db.connection(connection)
  }

  override query(modelConstructor: LucidModel, options?: ModelAdapterOptions): any {
    const client = this.modelConstructorClient(modelConstructor, options)
    return client.modelQuery(modelConstructor).withSchema('public')
  }
}
