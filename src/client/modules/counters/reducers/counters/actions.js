import { types } from './constants'

function setUsersCount(data = {}) {
  return {
    type: types.SET_USERS_COUNT,
    payload: data
  }
}

function setAllUsersCount(data = {}) {
  return {
    type: types.SET_ALL_USERS_COUNT,
    payload: data
  }
}

export const actions = {
  setUsersCount,
  setAllUsersCount
}
