export class StorageManager {
  static keys = Object.freeze({
    allUsersCount: 'allUsersCount',
    usersCount: 'usersCount',
    integrations: 'integrations',
    filters: 'filters'
  })

  callLocalStorage(method, key, data) {
    try {
      return localStorage[method](StorageManager.keys[key], data)
    } catch (err) {
      console.error(err)
    }
  }

  setAllUsersCount(count) {
    this.callLocalStorage('setItem', StorageManager.keys.allUsersCount, count)
  }

  clearAllUsersCount() {
    this.callLocalStorage('removeItem', StorageManager.keys.allUsersCount)
  }

  getAllUsersCount() {
    return this.callLocalStorage('getItem', StorageManager.keys.allUsersCount)
  }

  setUsersCount(count) {
    this.callLocalStorage('setItem', StorageManager.keys.usersCount, count)
  }

  clearUsersCount() {
    this.callLocalStorage('removeItem', StorageManager.keys.usersCount)
  }

  getUsersCount() {
    return this.callLocalStorage('getItem', StorageManager.keys.usersCount)
  }

  setIntegrations(integrations) {
    const json = JSON.stringify(integrations)
    this.callLocalStorage('setItem', StorageManager.keys.integrations, json)
  }

  clearIntegrations() {
    this.callLocalStorage('removeItem', StorageManager.keys.integrations)
  }

  getIntegrations() {
    try {
      const json = this.callLocalStorage(
        'getItem',
        StorageManager.keys.integrations
      )
      return JSON.parse(json)
    } catch (err) {
      console.error(err)
      this.clearIntegrations()
    }
  }

  pushIntegration(integration) {
    const integrations = JSON.parse(this.getIntegrations())
    integrations.push(integration)
    this.setIntegrations(integrations)
  }

  getFilters() {
    try {
      const json = this.callLocalStorage('getItem', StorageManager.keys.filters)
      return JSON.parse(json)
    } catch (err) {
      console.error(err)
      this.clearFilters()
    }
  }

  clearFilters() {
    this.callLocalStorage('removeItem', StorageManager.keys.filters)
  }

  setFilters(filters) {
    const json = JSON.stringify(filters)
    this.callLocalStorage('setItem', StorageManager.keys.filters, json)
  }
}
