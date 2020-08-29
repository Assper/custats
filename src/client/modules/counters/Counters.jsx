import React from 'react'
import { Provider } from 'react-redux'
import { Container } from '@material-ui/core'
import { AuthGuard } from '@/client/modules/auth'

import { CountersForm } from './containers/CountersForm'
import { store } from './store'

export function Counters() {
  return (
    <Provider store={store}>
      <AuthGuard>
        <Container>
          <CountersForm />
        </Container>
      </AuthGuard>
    </Provider>
  )
}
