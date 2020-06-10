import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Root from '../modules/root'
const Auth = lazy(() => import('../modules/auth'))
const Counters = lazy(() => import('../modules/counters'))

export function Page() {
  return (
    <Router>
      <Root>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Root>
    </Router>
  )
}
