import React from 'react'
import { Delete, Edit } from '@material-ui/icons'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Icon
} from '@material-ui/core'

export function IntegrationItem({ name, onEdit, onDelete }) {
  return (
    <ListItem>
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
    </ListItem>
  )
}
