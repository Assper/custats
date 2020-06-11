import { types } from './constants'

export function getUsersCount(filters = {}) {
  return {
    type: types.GET_USERS_COUNT,
    payload: filters.count
  }
}
