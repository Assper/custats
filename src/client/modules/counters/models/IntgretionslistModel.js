import { Model } from '@/client/common/decorators/model'

@Model
class IntegrationsListModel {
  add(name) {
    if (!name) return
    const integrations = this.state.integrations.concat(name)
    this.actions.setIntegrations(integrations)
  }

  edit(index) {
    console.log('edit:', index)
  }

  delete(index) {
    const integrations = [...this.state.integrations]
    integrations.splice(index, 1)
    this.actions.setIntegrations(integrations)
  }
}

export { IntegrationsListModel }
