export class StorageManager {
  static keys = Object.freeze({
    allUsersCount: 'allUsersCount',
    integrations: 'integrations'
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
}
