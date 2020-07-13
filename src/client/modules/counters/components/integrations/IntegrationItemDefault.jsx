import React, { Fragment } from 'react'
import { Delete, Edit } from '@material-ui/icons'
import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@material-ui/core'

export function IntegrationItemDefault({ name, selected, onEdit, onDelete, onSelect }) {
  return (
    <Fragment>
      <ListItemIcon>
        <Checkbox
          checked={false}
          onClick={onSelect}
          edge="start"
          color="primary"
          checked={selected}
        />
      </ListItemIcon>
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
