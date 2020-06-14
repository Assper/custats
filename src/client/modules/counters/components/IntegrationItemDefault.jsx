import React, { Fragment } from 'react'
import { Delete, Edit } from '@material-ui/icons'
import {
  ListItemIcon,
  ListItemText,
  IconButton
} from '@material-ui/core'

export function IntegrationItemDefault({ name, onEdit, onDelete }) {
  return (
    <Fragment>
      <ListItemText primary={name} />
      <ListItemIcon>
        <IconButton aria-label="edit" onClick={onEdit}>
          <Edit color="primary" />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon>
        <IconButton aria-label="delete" onClick={onDelete}>
          <Delete color="primary" />
        </IconButton>
      </ListItemIcon>
    </Fragment>
  )
}
