import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Root } from './modules/root'
import { Auth } from './modules/auth'
import { Counters } from './modules/counters'

export function App() {
  return (
    <Router>
      <Root>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/counters">
            <Counters />
          </Route>
          <Route path="/">
            <Redirect to="/counters" />
          </Route>
        </Switch>
      </Root>
    </Router>
  )
}
