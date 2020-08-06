import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import { AddItemField, CountField } from './fields'

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
        <CountField
          count={`Counted Users: ${users.count}`}
          error={users.error}
          isFetching={users.isFetching}
          className={classes.shiftRight}
        />
        <CountField
          count={`Total Users: ${allUsers.count}`}
          error={allUsers.error}
          isFetching={allUsers.isFetching}
          onCount={onAllUsersCount}
        />
      </div>
    </Grid>
  )
}

