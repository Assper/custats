import React from 'react'
import { FormControlLabel, Checkbox, Button, FormGroup } from '@material-ui/core'

import { FilterCheckbox } from '../fields'

export function IntegrationsTopBar({ filters, onSelectAll, onCount, onImportFilter, onPublisherFilter }) {
  return (
    <FormGroup row>
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
      <FilterCheckbox
        label="Imported"
        checked={filters.imported}
        onChange={onImportFilter}
      />
      <FilterCheckbox
        label="Publisher"
        checked={filters.publisher}
        onChange={onPublisherFilter}
      />
      <Button
        onClick={onCount}
        variant="contained"
        color="primary"
      >
        Count
      </Button>
    </FormGroup>
  )
}

