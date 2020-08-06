import React from 'react'
import { List } from '@material-ui/core'

import { IntegrationItem } from './IntegrationItem'

export function IntegrationsList({
  integrations,
  onEdit,
  onDelete,
  onSelect,
  onCancel,
  onConfirm
}) {
  const items = integrations.map((integration, i) => (
    <IntegrationItem
      key={integration.name + i}
      integration={integration}
      onEdit={() => onEdit && onEdit(integration, i)}
      onDelete={() => onDelete && onDelete(integration, i)}
      onSelect={() => onSelect && onSelect(integration, i)}
      onCancel={() => onCancel && onCancel(integration, i)}
      onConfirm={({ value }) => onConfirm && onConfirm({ ...integration, name: value }, i)}
    />
  ))

  return <List>{items}</List>
}
