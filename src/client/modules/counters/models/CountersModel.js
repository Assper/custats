import { encode } from 'querystring'
import axios from 'axios'

import { Model } from '@/client/common/decorators/model'

@Model
class CountersModel {
  constructor(storage) {
    this.storage = storage
    this.endpoint = '/api/counters/users'
  }

  async getUsersCount(filters = {}) {
    this.actions.setUsersCount({ isFetching: true, error: '' })
    const query = encode(JSON.stringify(filters))
    try {
      const response = await axios.get(`${this.endpoint}?filters=${query}`)
      const count = response.data.data.attributes.quantity
      this.actions.setUsersCount({ isFetching: false, count })
    } catch (error) {
      this.actions.setUsersCount({
        isFetching: false,
        error: error.toString()
      })
    }
  }

  async getAllUsersCount() {
    const count = this.storage.getAllUsersCount()
    if (count) {
      this.actions.setAllUsersCount({ isFetching: false, count })
      return
    }

    this.actions.setAllUsersCount({ isFetching: true, error: '' })
    try {
      const response = await axios.get(`${this.endpoint}/all`)
      const count = response.data.data.attributes.quantity
      this.actions.setAllUsersCount({ isFetching: false, count })
      this.storage.setAllUsersCount(count)
    } catch (error) {
      this.actions.setAllUsersCount({
        isFetching: false,
        error: error.toString()
      })
    }
  }
}

export { CountersModel }
