import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'
import {
  AppBar,
  Toolbar,
  Button,
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
  },
  toolbar: {
    justifyContent: 'space-between'
  }
})

export function Menu({ isLogged, login, logout }) {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography>
          <Link to="/counters" className={classes.link}>Counters</Link>
          <Link to="/import" className={classes.link}>Import</Link>
        </Typography>
        <Typography>
          {isLogged ? (
            <Button className={classes.link} onClick={logout}>Logout</Button>
          ) : (
            <Button className={classes.link} onClick={login}>Login</Button>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
