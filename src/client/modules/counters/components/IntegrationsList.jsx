import React from 'react'
import { List } from '@material-ui/core'

import { IntegrationItem } from './IntegrationItem'

export function IntegrationsList({ names, onEdit, onDelete }) {
  const items = names.map((name, i) => (
    <IntegrationItem
      key={name + i}
      name={name}
      onEdit={() => onEdit && onEdit(name, i)}
      onDelete={() => onDelete && onDelete(name, i)}
    />
  ))

  return <List>{items}</List>
}
