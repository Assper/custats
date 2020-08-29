import { types } from './constants'

function login() {
  return { type: types.LOGIN }
}

function logout() {
  return { type: types.LOGOUT }
}

export const actions = {
  login,
  logout
}
