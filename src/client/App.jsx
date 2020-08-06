import React, { StrictMode } from 'react'
import { Page } from './common/components/Page'
import { ErrorBoundary } from './common/components/Error'

export function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Page />
      </ErrorBoundary>
    </StrictMode>
  )
}
