import { Connect } from '../common/decorators/db'

@Connect
class CountersRepository {
  async getArrayOfDocs(dbName, collectionName, filters) {
    const db = await this.client.connectTo(dbName)
    const coll = db.collection(collectionName)
    return coll.find(filters).toArray()
  }

  async getIntegrations({ names, publisherOnly }) {
    const filters = {}
    if (names && names.length) { filters.name = { $in: names } }
    if (publisherOnly) { filters.publisherId = { $exists: true } }

    const { database, collection } = this.config
    return this.getArrayOfDocs(database.integrations, collection.integrations.integrations, filters)
  }

  async getAuthors({ integrationsIds }) {
    const filters = {}
    if (integrationsIds && integrationsIds.length) {
      filters.integrationId = { $in: integrationsIds }
    }

    const { database, collection } = this.config
    return this.getArrayOfDocs(database.comments, collection.comments.authors, filters)
  }

  async countAllUsers() {
    const { database, collection } = this.config
    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    return coll.estimatedDocumentCount()
  }

  async countUsers(filters) {
    const { database, collection } = this.config
    const integrationsIds = (await this.getIntegrations(filters.integrations)).map(({ uuid }) => uuid)
    const authorsIds = (await this.getAuthors({ integrationsIds })).map(({ authorId }) => authorId)

    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    return coll.countDocuments({ uuid: { $in: authorsIds } })
  }
}

export { CountersRepository }
