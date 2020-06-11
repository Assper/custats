import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Menu } from '../components/Menu'

const theme = createMuiTheme()

export function Root({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      {children}
    </ThemeProvider>
  )
}
