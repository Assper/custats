import React, { createContext, useState } from 'react'

const initialState = {
  isLogged: false,
  login: () => {},
  logout: () => {}
}

export const AuthContext = createContext(initialState)
export const AuthConsumer = AuthContext.Consumer

export function AuthProvider({ isLogged, login, logout, children }) {
  const [status, setStatus] = useState(isLogged)
  const state = {
    isLogged: status,
    login: getAuthStatusChange(true, login, setStatus),
    logout: getAuthStatusChange(false, logout, setStatus)
  }

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}

function getAuthStatusChange(defaultStatus, handler, setStatus) {
  return () => {
    if (typeof handler === 'function') {
      Promise.resolve(handler()).then(status => setStatus(status))
    } else {
      setStatus(defaultStatus)
    }
  }
}
