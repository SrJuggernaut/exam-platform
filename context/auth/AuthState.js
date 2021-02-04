import React, { useReducer } from 'react'
import propTypes from 'prop-types'
import authContext from './authContext'
import authReducer from './authReducer'
import {} from './authTypes'

import initDB from '../../helper/initDB'

initDB()

function AuthState ({ children }) {
  const initialState = {
    usuario: {}
  }
  const [state, dispatch] = useReducer(authReducer, initialState)

  return <authContext.Provider value={{}}>{children}</authContext.Provider>
}

AuthState.propTypes = {
  children: propTypes.node
}

export default AuthState
