import React from 'react'
import { CircularProgress, Typography, IconButton, Grid, makeStyles } from '@material-ui/core'
import { Refresh } from '@material-ui/icons'

import { AddItemField } from './fields'

const useStyles = makeStyles({
  counts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  shiftRight: {
    marginRight: '10px'
  }
})

export function CountsBar({ users, allUsers, onAllUsersCount, onItemAdd }) {
  const classes = useStyles()

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <AddItemField onItemAdd={onItemAdd} />
      <div className={classes.counts}>
        <div className={classes.shiftRight}>
          {users.isFetching && <CircularProgress />}
          {!users.isFetching && (
            <Typography type="h3">
              Counted Users: {users.count}
            </Typography>
          )}
          {users.error && <Typography type="h3" color="error">{users.error}</Typography>}
        </div>
        <div>
          {allUsers.isFetching && <CircularProgress />}
          {!allUsers.isFetching && (
            <Typography type="h3">
              Total Users: {allUsers.count}
              <IconButton aria-label="reresh counter" onClick={onAllUsersCount}>
                <Refresh color="primary" />
              </IconButton>
            </Typography>
          )}
          {allUsers.error && <Typography type="h3" color="error">{allUsers.error}</Typography>}
        </div>
      </div>
    </Grid>
  )
}

