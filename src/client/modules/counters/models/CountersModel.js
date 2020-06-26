import axios from 'axios'

import { Model } from '@/client/common/decorators/model'
import { CountersError } from '../helpers/CountersError'

@Model
class CountersModel {
  constructor(storage) {
    this.storage = storage
    this.endpoint = '/api/counters/users'
  }

  getCounterFromStorage(getMethod, setMethod) {
    const count = this.storage[getMethod]() || 0
    this.actions[setMethod]({ isFetching: false, count })
  }

  setFilters(filters = {}) {
    this.actions.setFilters(filters)
    this.storage.setFilters({ ...this.state.filters, ...filters })
  }

  getFilters() {
    const filters = this.storage.getFilters()
    if (filters) {
      this.actions.setFilters(filters)
    }
  }

  async getUsersCount(integrations = [], useStorage = false) {
    if (useStorage) {
      return this.getCounterFromStorage('getUsersCount', 'setUsersCount')
    }

    const { filters } = this.state
    const queryFilters = { ...filters, integrations }
    this.actions.setUsersCount({ isFetching: true, error: '' })
    try {
      const json = JSON.stringify(queryFilters)
      const query = encodeURIComponent(json)
      const response = await axios.get(`${this.endpoint}?filters=${query}`)
      const count = response.data.data.attributes.quantity
      this.actions.setUsersCount({ isFetching: false, count })
      this.storage.setUsersCount(count)
    } catch (err) {
      const error = new CountersError(err, true)
      this.actions.setUsersCount({
        isFetching: false,
        error: error.getMessage()
      })
    }
  }

  async getAllUsersCount(useStorage = false) {
    if (useStorage) {
      return this.getCounterFromStorage('getAllUsersCount', 'setAllUsersCount')
    }

    this.actions.setAllUsersCount({ isFetching: true, error: '' })
    try {
      const response = await axios.getUri(`${this.endpoint}/all`)
      const count = response.data.data.attributes.quantity
      this.actions.setAllUsersCount({ isFetching: false, count })
      this.storage.setAllUsersCount(count)
    } catch (err) {
      const error = new CountersError(err, true)
      this.actions.setAllUsersCount({
        isFetching: false,
        error: error.getMessage()
      })
    }
  }
}

export { CountersModel }
