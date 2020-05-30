import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

export function Menu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          <Link to="/counters">Counters</Link>
        </Typography>
        <Typography>
          <Link to="/auth">Auth</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
