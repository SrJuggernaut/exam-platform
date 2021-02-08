import React, { useContext, useReducer } from 'react'
import propTypes from 'prop-types'
import authContext from './authContext'
import authReducer from './authReducer'
import appContext from '../app/appContext'
import {
  USUARIO_REGISTRADO,
  USUARIO_INICIOSESION_EXITO,
  USUARIO_INICIOSESION_FALLA,
  USUARIO_CERRAR_SESION
} from './authTypes'

function AuthState ({ children }) {
  const { db } = useContext(appContext)
  const initialState = {
    usuario: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('usuario')) || {} : {},
    alerta: null
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
      usuario.contrasena = ''
      guardarUsuarioLocal(usuario)
      dispatch({
        type: USUARIO_REGISTRADO,
        payload: usuario
      })
    } catch (err) {
      console.log(err)
    }
  }
  const iniciarSesion = async (credenciales) => {
    console.log(credenciales)
    try {
      const aplData = await db.aplicantes
        .where('correoElectrionico')
        .equals(credenciales.correoElectrionico)
        .first()
      const instData = await db.instructores
        .where('correoElectrionico')
        .equals(credenciales.correoElectrionico)
        .first()
      if (aplData && aplData.contrasena === credenciales.contrasena) {
        aplData.contrasena = ''
        dispatch({
          type: USUARIO_INICIOSESION_EXITO,
          payload: aplData
        })
        guardarUsuarioLocal(aplData)
      } else if (instData && instData.contrasena === credenciales.contrasena) {
        instData.contrasena = ''
        dispatch({
          type: USUARIO_INICIOSESION_EXITO,
          payload: instData
        })
        guardarUsuarioLocal(instData)
      } else {
        dispatch({
          type: USUARIO_INICIOSESION_FALLA,
          payload:
            'No se ha encontrado ningun usuario con esa combinacion Correo electronico / contraseña'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  const guardarUsuarioLocal = (usuario) => {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }
  const cerrarSesion = () => {
    localStorage.removeItem('usuario')
    dispatch({
      type: USUARIO_CERRAR_SESION
    })
  }
  return (
    <authContext.Provider
      value={{
        usuario: state.usuario,
        alerta: state.alerta,
        registrarUsuario,
        iniciarSesion,
        cerrarSesion
      }}
    >
      {children}
    </authContext.Provider>
  )
}

AuthState.propTypes = {
  children: propTypes.node
}

export default AuthState
