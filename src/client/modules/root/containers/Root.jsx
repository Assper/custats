import React, { Fragment } from 'react'
import { Menu } from '../components/Menu'

export function Root({ children }) {
  return (
    <Fragment>
      <Menu />
      {children}
    </Fragment>
  )
}
