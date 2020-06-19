import axios from 'axios'

import { Model } from '@/client/common/decorators/model'

@Model
class CountersModel {
  constructor(storage) {
    this.storage = storage
    this.endpoint = '/api/counters/users'
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

  async getUsersCount(integrations = []) {
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
    } catch (error) {
      console.error(error)
      this.actions.setUsersCount({
        isFetching: false,
        error
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
      console.error(error)
      this.actions.setAllUsersCount({
        isFetching: false,
        error
      })
    }
  }
}

export { CountersModel }
