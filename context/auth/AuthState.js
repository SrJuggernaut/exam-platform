import React, { useContext, useReducer } from 'react'
import propTypes from 'prop-types'
import authContext from './authContext'
import authReducer from './authReducer'
import appContext from '../app/appContext'
import { USUARIO_REGISTRADO } from './authTypes'

function AuthState ({ children }) {
  const { db } = useContext(appContext)
  const initialState = {
    usuario: {}
  }
  const [state, dispatch] = useReducer(authReducer, initialState)
  const registrarUsuario = (usuario) => {
    try {
      switch (usuario.tipoUsuario) {
        case 'instructor':
          db.instructores.add(usuario)
          break
        case 'aplicante':
        default:
          db.aplicantes.add(usuario)
          break
      }
      dispatch({
        type: USUARIO_REGISTRADO,
        payload: usuario
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <authContext.Provider value={{
      usuario: state.usuario,
      registrarUsuario
    }}>
      {children}
    </authContext.Provider>
  )
}

AuthState.propTypes = {
  children: propTypes.node
}

export default AuthState
