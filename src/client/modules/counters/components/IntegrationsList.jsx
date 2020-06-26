import React, { Fragment } from 'react'
import { List, FormControlLabel, Checkbox } from '@material-ui/core'

import { IntegrationItem } from './IntegrationItem'

export function IntegrationsList({
  integrations,
  onEdit,
  onDelete,
  onSelect,
  onSelectAll,
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

  return (
    <Fragment>
      <FormControlLabel
        control={
          <Checkbox
            onClick={(e) => onSelectAll(e.target)}
            name="select-all"
            color="primary"
          />
        }
        label="Select All"
      />
      <List>{items}</List>
    </Fragment>
  )
}
