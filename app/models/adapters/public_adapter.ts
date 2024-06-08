import type { LucidModel, ModelAdapterOptions } from '@adonisjs/lucid/types/model'
import DefaultLucidAdapter from '#models/adapters/default_lucid_adapter'

/**
 * This will scope the model connection and queries to the public schema
 */
export default class PublicAdapter extends DefaultLucidAdapter {
  override query(modelConstructor: LucidModel, options?: ModelAdapterOptions): any {
    const client = this.modelConstructorClient(modelConstructor, options)
    return client.modelQuery(modelConstructor).withSchema('public')
  }
}
