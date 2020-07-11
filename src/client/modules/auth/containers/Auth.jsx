import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'

export function Auth() {
  useEffect(() => {
    window.location.assign('/api/auth')
  }, [])

  return (
    <Grid>Auth</Grid>
  )
}
