import React, { useRef, useCallback } from 'react'
import { Input, InputAdornment, IconButton } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'

export function AddItemField({ value, onChange, onItemAdd }) {
  const ref = useRef()
  const handleAddItem = useCallback((e) => {
    if ((e.key && e.key !== 'Enter') || !ref.current) return 
    onItemAdd(ref.current)
    ref.current.value = ''
  }, [ref, onItemAdd])

  return (
    <Input
      inputRef={ref}
      color="primary"
      onChange={onChange}
      placeholder="Integration name"
      defaultValue={value || ''}
      onKeyDown={handleAddItem}
      endAdornment={
        <InputAdornment
          onClick={handleAddItem}
          position="end"
        >
          <IconButton aria-label="add integration">
            <AddCircle color="primary" />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}
