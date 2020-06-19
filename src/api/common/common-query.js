import escapeRegexp from 'escape-string-regexp'
import { Connect } from './decorators/db'

@Connect
class CommonQuery {
  async getArrayOfDocs({ dbname, collection, filters, options }) {
    const db = await this.client.connectTo(dbname)
    const coll = db.collection(collection)
    return coll.find(filters, options).toArray()
  }

  async getIntegrationsIds({ names, publisher }) {
    if (names && !names.length) return []

    const filters = {}
    if (names) {
      const escapedNames = names.map(
        (name) => new RegExp(escapeRegexp(name), 'i')
      )
      filters.name = { $in: escapedNames }
    }
    if (publisher) {
      filters.publisherId = { $and: [{ $ne: '' }, { $ne: null }] }
    }

    const { database, collection } = this.config
    const db = await this.client.connectTo(database.integrations)
    const coll = db.collection(collection.integrations.integrations)
    return coll.distinct('uuid', filters)
  }

  async getAuthorsIds({ integrationsIds }) {
    if (integrationsIds && !integrationsIds.length) return []

    const filters = {}
    if (integrationsIds) {
      filters.integrationId = { $in: integrationsIds }
    }

    const { database, collection } = this.config
    const db = await this.client.connectTo(database.comments)
    const coll = db.collection(collection.comments.authors)
    return coll.distinct('authorId', filters)
  }
}

export { CommonQuery }
