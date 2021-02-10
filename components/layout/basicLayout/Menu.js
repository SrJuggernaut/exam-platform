import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import gsap from 'gsap'

import NavMenu from './menu/NavMenu'
import UserMenu from './menu/UserMenu'

const MenuWrapper = styled.div`
  position: sticky;
  top: 52px;
  width: 100%;
  color: var(--color-light);
`

function Menu ({ navMenu, userMenu }) {
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

Menu.propTypes = {
  navMenu: propTypes.bool.isRequired,
  userMenu: propTypes.bool.isRequired
}

export default Menu
