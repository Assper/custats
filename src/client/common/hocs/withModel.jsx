import React from 'react'

export function withModel(Model) {
  return (Wrapped) => (props) => {
    const model = typeof Model === 'function' ? new Model(props) : Model
    return <Wrapped {...props} model={model} />
  }
}
