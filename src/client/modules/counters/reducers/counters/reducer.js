import { types } from './constants'

const initialState = {
  users: {
    isFetching: false,
    error: '',
    count: 0
  },
  allUsers: {
    isFetching: false,
    error: '',
    count: 0
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS_COUNT:
      return {
        ...state,
        users: {
          ...state.users,
          ...action.payload
        }
      }

    case types.SET_ALL_USERS_COUNT:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          ...action.payload
        }
      }

    default:
      return { ...state }
  }
}
