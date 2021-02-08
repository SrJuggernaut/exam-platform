import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import gsap from 'gsap'

import appContext from '../../../context/app/appContext'
import NavMenu from './menu/NavMenu'
import UserMenu from './menu/UserMenu'

const MenuWrapper = styled.div`
  position: sticky;
  top: 52px;
  width: 100%;
  color: var(--color-light);
`

function Menu (props) {
  const app = useContext(appContext)
  const { navMenu, userMenu } = app
  useEffect(() => {
    gsap.to('#navMenu', { height: (navMenu ? 'auto' : '0'), duration: 0.25 })
    gsap.to('#userMenu', { height: (userMenu ? 'auto' : '0'), duration: 0.25 })
  }, [navMenu, userMenu])
  return (
    <MenuWrapper>
      <NavMenu />
      <UserMenu />
    </MenuWrapper>
  )
}

export default Menu
