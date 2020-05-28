import escapeRegexp from 'escape-string-regexp'
import { Connect } from './decorators/db'

@Connect
class CommonQuery {
  async getArrayOfDocs({ dbname, collection, filters, projection }) {
    const db = await this.client.connectTo(dbname)
    const coll = db.collection(collection)
    return coll.find(filters, { projection }).toArray()
  }

  async getIntegrationsIds({ names, publisher }) {
    const filters = {}
    if (names && names.length) {
      const escapedNames = names.map(
        (name) => new RegExp(escapeRegexp(name), 'i')
      )
      filters.name = { $in: escapedNames }
    }
    if (publisher) {
      filters.publisherId = { $exists: true, $ne: '' }
    }

    const { database, collection } = this.config
    const db = await this.client.connectTo(database.integrations)
    const coll = db.collection(collection.integrations.integrations)
    return coll.distinct('uuid', filters)
  }

  async getAuthorsIds({ integrationsIds }) {
    const filters = {}
    if (integrationsIds && integrationsIds.length) {
      filters.integrationId = { $in: integrationsIds }
    }

    const { database, collection } = this.config
    const db = await this.client.connectTo(database.comments)
    const coll = db.collection(collection.comments.authors)
    return coll.distinct('authorId', filters)
  }
}

export { CommonQuery }
