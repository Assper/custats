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
      filters.name = { $in: names.map((name) => new RegExp(name, 'i')) }
    }
    if (publisher) {
      filters.publisherId = { $exists: true, $ne: '' }
    }

    const { database, collection } = this.config
    return this.getArrayOfDocs({
      dbname: database.integrations,
      collection: collection.integrations.integrations,
      projection: { uuid: 1, _id: 0 },
      filters
    })
  }

  async getAuthorsIds({ integrationsIds }) {
    const filters = {}
    if (integrationsIds && integrationsIds.length) {
      filters.integrationId = { $in: integrationsIds }
    }

    const { database, collection } = this.config
    return this.getArrayOfDocs({
      dbname: database.comments,
      collection: collection.comments.authors,
      projection: { authorId: 1, _id: 0 },
      filters
    })
  }
}

export { CommonQuery }
