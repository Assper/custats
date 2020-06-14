import { Model } from '@/client/common/decorators/model'

@Model
class IntegrationsListModel {
  add(name) {
    if (!name) return
    const data = { name, isEditing: false, isSelected: false }
    const integrations = this.state.integrations.concat(data)
    this.actions.setIntegrations(integrations)
  }

  edit(index) {
    const integrations = [...this.state.integrations]
    integrations[index].isEditing = true
    this.actions.setIntegrations(integrations)
  }

  editCancel(index) {
    const integrations = [...this.state.integrations]
    integrations[index].isEditing = false
    this.actions.setIntegrations(integrations)
  }

  editConfirm(name, index) {
    const integrations = [...this.state.integrations]
    integrations[index].isEditing = false
    integrations[index].name = name
    this.actions.setIntegrations(integrations)
  }

  select(status, index) {
    const integrations = [...this.state.integrations]
    integrations[index].isSelected = status
    this.actions.setIntegrations(integrations)
  }

  selectAll(status) {
    const integrations = this.state.integrations
      .map((integration) => ({ ...integration, isSelected: status }))
    this.actions.setIntegrations(integrations)
  }

  delete(index) {
    const integrations = [...this.state.integrations]
    integrations.splice(index, 1)
    this.actions.setIntegrations(integrations)
  }
}

export { IntegrationsListModel }
