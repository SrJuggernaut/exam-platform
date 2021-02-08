import { USUARIO_REGISTRADO, USUARIO_INICIOSESION_FALLA, USUARIO_INICIOSESION_EXITO, USUARIO_CERRAR_SESION } from './authTypes'

const authReducer = (state, action) => {
  switch (action.type) {
    case USUARIO_INICIOSESION_EXITO:
    case USUARIO_REGISTRADO:
      return {
        ...state,
        usuario: action.payload,
        alerta: null
      }
    case USUARIO_INICIOSESION_FALLA:
      return {
        ...state,
        alerta: action.payload
      }
    case USUARIO_CERRAR_SESION:
      return {
        ...state,
        usuario: {}
      }
    default:
      return state
  }
}

export default authReducer
