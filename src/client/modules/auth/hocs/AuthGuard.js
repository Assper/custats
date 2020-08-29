import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export function AuthGuard({ children }) {
  const history = useHistory()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (!auth.isLogged) history.push('/auth')
  }, [auth.isLogged])

  return children
}
