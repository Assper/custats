import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  link: {
    color: grey[50],
    marginRight: 10,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: grey[300]
    }
  }
})

export function Menu() {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          <Link to="/counters" className={classes.link}>Counters</Link>
          <Link to="/auth" className={classes.link}>Auth</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
