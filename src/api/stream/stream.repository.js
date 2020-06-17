import { Readable } from 'stream'
import { CommonQuery } from '@/api/common/common-query'

class StreamRepository extends CommonQuery {
  async getUsersByPublisher() {
    const { database, collection } = this.config
    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    const readable = new Readable({
      read: () => true
    })

    const stream = coll.find().stream()
    stream.on('data', (doc) => readable.push(JSON.stringify(doc)))
    stream.on('end', () => readable.push(null))
    stream.on('error', console.error)

    return readable
  }
}

export { StreamRepository }
