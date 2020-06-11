import { useMemo } from 'react'

export function useModel(Model, args, deps) {
  return useMemo(
    () => typeof Model === 'function' ? new Model(...args) : Model,
    deps
  )
}
