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

function setFilters(filters = {}) {
  return {
    type: types.SET_FILTERS,
    payload: filters
  }
}

export const actions = {
  setUsersCount,
  setAllUsersCount,
  setFilters
}
