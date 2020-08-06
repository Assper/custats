import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
  reducer as countersReducer,
  NAME as COUNTERS_NAME
} from './reducers/counters'

import {
  reducer as integrationsReducer,
  NAME as INTEGRATIONS_NAME
} from './reducers/integrations'

export const reducer = combineReducers({
  [COUNTERS_NAME]: countersReducer,
  [INTEGRATIONS_NAME]: integrationsReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))
