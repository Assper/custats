import React from 'react'
import { Refresh } from '@material-ui/icons'
import { CircularProgress, Typography, IconButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    padding: '12px'
  }
})

export function CountField({ isFetching, count, error, className, onCount }) {
  const classes = useStyles()

  return (
    <div className={`${classes.container} ${className}`}>
      <Typography type="h3">{count}</Typography>
      {isFetching && <CircularProgress size={24} className={classes.progress} />}
      {onCount && !isFetching && (
        <IconButton aria-label="reresh counter" onClick={onCount}>
          <Refresh color="primary" />
        </IconButton>
      )}
      {error && <Typography type="h3" color="error">{error}</Typography>}
    </div>
  )
}
