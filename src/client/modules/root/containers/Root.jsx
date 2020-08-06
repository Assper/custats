import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withUserData } from '../../../common/hocs/withUserData'
import { Menu } from '../components/Menu'

const theme = createMuiTheme()
const ContaineredMenu = withUserData(Menu)

export function Root({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ContaineredMenu />
      {children}
    </ThemeProvider>
  )
}
