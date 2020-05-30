import React from 'react'
import { Container  } from '@material-ui/core'

import { Menu } from '../components/Menu'

export function Root({ children }) {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  )
}
