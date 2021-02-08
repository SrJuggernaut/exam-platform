import React, { useReducer } from 'react'
import propTypes from 'prop-types'
import appContext from './appContext'
import appReducer from './appReducer'

import { SET_NAVMENU, SET_USERMENU } from './appTypes'

import db from '../../config/db'

function AppState ({ children }) {
  const initialState = {
    navMenu: false,
    userMenu: false,
    db: db
  }
  const [state, dispatch] = useReducer(appReducer, initialState)
  const setNavMenu = (navMenuState) => {
    dispatch({
      type: SET_NAVMENU,
      payload: navMenuState
    })
  }
  const setUserMenu = (userMenuState) => {
    dispatch({
      type: SET_USERMENU,
      payload: userMenuState
    })
  }
  return <appContext.Provider value={{
    navMenu: state.navMenu,
    setNavMenu,
    userMenu: state.userMenu,
    setUserMenu,
    db: state.db
  }}>{children}</appContext.Provider>
}

AppState.propTypes = {
  children: propTypes.node
}

export default AppState
