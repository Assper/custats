import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { AuthContext } from '@/client/modules/auth'

export function AuthStatus({ className }) {
  const auth = useContext(AuthContext)

  return auth.isLogged ? (
    <Button className={className} onClick={auth.logout}>Logout</Button>
  ) : (
    <Button className={className} onClick={auth.login}>Login</Button>
  )
}
