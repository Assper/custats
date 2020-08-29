import React from 'react'
import {
  Checkbox,
  FormControlLabel
} from '@material-ui/core'

export function FilterCheckbox({ label, checked, name, onChange }) {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name || label.split(' ').join('-').toLowerCase()}
          color="primary"
        />
      }
    />
  )
}
