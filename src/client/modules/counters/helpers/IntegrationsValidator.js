export class IntegrationsValidator {
  constructor(integrations = []) {
    this.integrations = integrations
  }

  isUnique(name) {
    return this.integrations.every((integration) => name !== integration.name)
  }

  isValidName(name) {
    return name && typeof name === 'string'
  }

  validateName(name) {
    const isValidName = this.isValidName(name)
    if (!isValidName) return "Name can't be blank"

    const isUnique = this.isUnique(name)
    if (!isUnique) return 'Name should be unique'
  }
}
