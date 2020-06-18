export class IntegrationsValidator {
  isUnique(name, integrations = []) {
    return integrations.every((integration) => name !== integration.name)
  }

  isValidName(name) {
    return name && typeof name === 'string'
  }

  validateName(name, integrations = []) {
    const isValidName = this.isValidName(name)
    if (!isValidName) return "Name can't be blank"

    const isUnique = this.isUnique(name, integrations)
    if (!isUnique) return 'Name should be unique'
  }
}
