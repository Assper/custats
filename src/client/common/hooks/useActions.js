import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () =>
      Array.isArray(actions)
        ? actions.map((a) => bindActionCreators(a, dispatch))
        : bindActionCreators(actions, dispatch),
    deps ? [dispatch, ...deps] : [dispatch]
  )
}
