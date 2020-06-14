import { types } from './constants'

function setIntegrations(integrations) {
  return {
    type: types.SET_INTEGRATIONS,
    payload: integrations
  }
}

export const actions = {
  setIntegrations
}
