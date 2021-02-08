import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-modal'
import styled from '@emotion/styled'
import Link from 'next/link'

import authContext from '../../../../context/auth/authContext'
import bP from '../../../../helper/breakpoints'
import Button from '../../../ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserMenuWrapper = styled.div`
  position: absolute;
  background-color: var(--color-brand);
  width: 100%;
  height: 0;
  overflow: hidden;
`
const MenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacer);
  padding-right: var(--spacer);
  padding-left: var(--spacer);
  @media (min-width: ${bP.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${bP.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const MenuColNoUser = styled.div`
  padding: var(--spacer);
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 2;
  @media (min-width: ${bP.sm}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media (min-width: ${bP.md}) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`
const StyledModal = styled(Modal)`
    position: absolute;
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
`
const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover{
    cursor: pointer;
  }
`
function UserMenu (props) {
  const { usuario, cerrarSesion } = useContext(authContext)
  const [hayUsuario, setHayUsuario] = useState(false)
  const [modalCerrarSesion, setModalCerrarSesion] = useState(false)
  useEffect(() => {
    setHayUsuario(Object.entries(usuario).length === 0)
  })
  return (
    <UserMenuWrapper id="userMenu">
      <MenuContent className="container">
        {hayUsuario
          ? (
          <MenuColNoUser>
            <p>Para poder acceder a tus ajustes de usuario es necesario que:</p>
            <p>
              <Link href="/login">
                <a>Inicies Sesión</a>
              </Link>{' '}
              o te{' '}
              <Link href="/register">
                <a>Registres</a>
              </Link>
            </p>
          </MenuColNoUser>
            )
          : (
          <>
            <div>
              <span className="h5">Examenes</span>
              <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
              </ul>
            </div>
            <div>
              <span className="h5">Quod, accusamus?</span>
              <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
              </ul>
            </div>
            <div>
              <span className="h5">Usuario</span>
              <ul>
                <li>Perfil</li>
                <li>item2</li>
                <li>
                  <a href="#!" onClick={() => setModalCerrarSesion(true)}>
                    Cerrar Sesion
                  </a>
                </li>
                <StyledModal
                  ariaHideApp={false}
                  isOpen={modalCerrarSesion}
                  onRequestClose={() => setModalCerrarSesion(false)}
                  style={{
                    overlay: {
                      position: 'fixed',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(54, 29, 50, .45)'
                    },
                    content: {
                      backgroundColor: 'white'
                    }
                  }}
                >
                  <CloseIcon icon={['fal', 'times']} onClick={() => setModalCerrarSesion(false)} />
                  <p>¿Desea cerrar sesion?</p>
                  <Button color="success" onClick={() => cerrarSesion()}>Cerrar Sesion</Button>
                  <Button color="danger" onClick={() => setModalCerrarSesion(false)}>Cancelar</Button>
                </StyledModal>
              </ul>
            </div>
          </>
            )}
      </MenuContent>
    </UserMenuWrapper>
  )
}

export default UserMenu
