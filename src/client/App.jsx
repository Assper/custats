import React, { StrictMode } from 'react'
import { Page } from './common/Page'
import { ErrorBoundary } from './common/ErrorBoundary'

export function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Page />
      </ErrorBoundary>
    </StrictMode>
  )
}
