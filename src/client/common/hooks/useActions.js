import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () =>
      Array.isArray(actions)
        ? actions.map((action) => bindActionCreators(action, dispatch))
        : bindActionCreators(actions, dispatch),
    deps ? [dispatch, ...deps] : [dispatch]
  )
}
