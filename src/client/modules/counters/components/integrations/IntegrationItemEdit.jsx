import React, { Fragment, useRef } from 'react'
import { Done, Cancel } from '@material-ui/icons'
import {
  ListItemIcon,
  IconButton,
  Input
} from '@material-ui/core'

export function IntegrationItemEdit({ name, onCancel, onConfirm }) {
  const ref = useRef()

  return (
    <Fragment>
      <Input
        inputRef={ref}
        placeholder="Integration name"
        defaultValue={name}
      />
      <ListItemIcon>
        <IconButton aria-label="confirm" onClick={() => onConfirm(ref.current)}>
          <Done color="primary" />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon>
        <IconButton aria-label="cancel" onClick={() => onCancel(ref.current)}>
          <Cancel color="primary" />
        </IconButton>
      </ListItemIcon>
    </Fragment>
  )
}
