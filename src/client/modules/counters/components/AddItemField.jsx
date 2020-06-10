import React, { useRef } from 'react'
import { Input, InputAdornment } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'

export function AddItemField({ onChange, onItemAdd }) {
  const ref = useRef()

  return (
    <Input
      inputRef={ref}
      onChange={onChange}
      placeholder="Integration name"
      endAdornment={
        <InputAdornment
          onClick={() => onItemAdd(ref.current)}
          position="end"
        >
          <AddCircle />
        </InputAdornment>
      }
    />
  )
}
