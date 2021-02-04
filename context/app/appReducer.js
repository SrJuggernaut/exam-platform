import { SET_NAVMENU, SET_USERMENU } from './appTypes'
const appReducer = (state, action) => {
  switch (action.type) {
    case SET_NAVMENU:
      return {
        ...state,
        navMenu: action.payload
      }
    case SET_USERMENU:
      return {
        ...state,
        userMenu: action.payload
      }
    default:
      return state
  }
}

export default appReducer
