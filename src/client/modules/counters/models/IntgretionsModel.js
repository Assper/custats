import { Model } from '@/client/common/decorators/model'

@Model
class IntegrationsModel {
  constructor(storage, validator) {
    this.storage = storage
    this.validator = validator
  }

  add(name) {
    const error = this.validator.validateName(name, this.state.integrations)
    if (error) return console.error(error)

    const data = { name, isEditing: false, isSelected: false }
    const integrations = this.state.integrations.concat(data)
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  edit(index) {
    const integrations = [...this.state.integrations]
    integrations[index].isEditing = true
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  editCancel(index) {
    const integrations = [...this.state.integrations]
    integrations[index].isEditing = false
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  editConfirm(name, index) {
    const error = this.validator.validateName(name, this.state.integrations)
    if (error) return console.error(error)

    const integrations = [...this.state.integrations]
    integrations[index].isEditing = false
    integrations[index].name = name
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  select(status, index) {
    const integrations = [...this.state.integrations]
    integrations[index].isSelected = status
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  selectAll(status) {
    const integrations = this.state.integrations.map((integration) => ({
      ...integration,
      isSelected: status
    }))
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  delete(index) {
    const integrations = [...this.state.integrations]
    integrations.splice(index, 1)
    this.actions.setIntegrations(integrations)
    this.storage.setIntegrations(integrations)
  }

  getIntegrations() {
    const integrations = this.storage.getIntegrations()
    if (integrations && integrations.length) {
      this.actions.setIntegrations(integrations)
    }
  }
}

export { IntegrationsModel }
