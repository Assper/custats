import React from 'react'
import { Container, Typography } from '@material-ui/core'

export function CrashError() {
  return (
    <Container>
      <Typography
        align="center"
        variant="h2"
        color="error"
      >
        Something went wrong
      </Typography>
      <Typography
        align="center"
        variant="subtitle1"
        color="secondary"
      >
        Try to reload page
      </Typography>
    </Container>
  )
}
