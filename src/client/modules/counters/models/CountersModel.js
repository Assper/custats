import { encode } from 'querystring'
import axios from 'axios'

import { Model } from '@/client/common/decorators/model'

@Model
class CountersModel {
  constructor() {
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
    this.actions.setAllUsersCount({ isFetching: true, error: '' })
    try {
      const response = await axios.get(`${this.endpoint}/all`)
      const count = response.data.data.attributes.quantity
      this.actions.setAllUsersCount({ isFetching: false, count })
    } catch (error) {
      this.actions.setAllUsersCount({
        isFetching: false,
        error: error.toString()
      })
    }
  }
}

export { CountersModel }
