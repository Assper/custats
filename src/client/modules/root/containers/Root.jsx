import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Menu } from '../components/Menu'
import { AuthProvider } from '@/client/modules/auth'

const theme = createMuiTheme()

export function Root({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider isLogged={false}>
        <Menu />
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}
