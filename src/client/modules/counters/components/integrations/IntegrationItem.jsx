import React from 'react'
import { ListItem } from '@material-ui/core'

import { IntegrationItemDefault } from './IntegrationItemDefault'
import { IntegrationItemEdit } from './IntegrationItemEdit'

export function IntegrationItem({ integration, onEdit, onDelete, onSelect, onCancel, onConfirm }) {
  return (
    <ListItem>
      {integration.isEditing ? (
        <IntegrationItemEdit
          name={integration.name}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      ) : (
        <IntegrationItemDefault
          selected={integration.isSelected}
          name={integration.name}
          onEdit={onEdit}
          onDelete={onDelete}
          onSelect={onSelect}
        />
      )}
    </ListItem>
  )
}
