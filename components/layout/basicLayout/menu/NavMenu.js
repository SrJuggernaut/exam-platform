import React from 'react'
import styled from '@emotion/styled'

const NavMenuWrapper = styled.div`
  position: absolute;
  background-color: var(--color-brand);
  width: 100vw;
  height: 0;
  overflow: hidden;
`
const MenuContent = styled.div`
  
`

function NavMenu (props) {
  return (
    <NavMenuWrapper id="navMenu">
      <MenuContent className="container">
        <span className="h4">Nav Menu</span>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Nulla, officia. Labore, ea?</li>
          <li>Enim, maiores quo. Quisquam.</li>
          <li>Molestias consectetur esse tenetur.</li>
          <li>Commodi distinctio accusamus nam!</li>
        </ul>
      </MenuContent>
    </NavMenuWrapper>
  )
}

export default NavMenu
