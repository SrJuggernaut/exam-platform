import React, { useReducer } from 'react'
import propTypes from 'prop-types'
import authContext from './authContext'
import authReducer from './authReducer'
import {} from './authTypes'

function AuthState ({ children }) {
  const initialState = {
    usuario: {}
  }
  const [state, dispatch] = useReducer(authReducer, initialState)
  const registrarUsuario = (usuario) => console.log(usuario)
  return (
    <authContext.Provider value={{ registrarUsuario }}>
      {children}
    </authContext.Provider>
  )
}

AuthState.propTypes = {
  children: propTypes.node
}

export default AuthState
