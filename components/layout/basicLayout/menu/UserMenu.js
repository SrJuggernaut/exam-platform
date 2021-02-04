import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import bP from '../../../../helper/breakpoints'

const UserMenuWrapper = styled.div`
  position: absolute;
  background-color: var(--color-brand);
  width: 100vw;
  height: 0;
  overflow: hidden;
`
const MenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacer);
  padding-right: var(--spacer);
  padding-left: var(--spacer);
  @media(min-width: ${bP.xsm}){
    grid-template-columns: repeat(1, 1fr);
  }
  @media(min-width: ${bP.sm}){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: ${bP.md}){
    grid-template-columns: repeat(3, 1fr);
  }
`

function UserMenu (props) {
  return (
    <UserMenuWrapper id="userMenu">
      <MenuContent className="container">
        <div>
          <span className="h5">Lorem, ipsum.</span>
          <ul>
            <li>
              <Link href="#!"><a>Item1</a></Link>
            </li>
            <li>
              <Link href="#!"><a>Item2</a></Link>
            </li>
            <li>
              <Link href="#!"><a>Item3</a></Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="h5">Repellat, assumenda!</span>
          <ul>
            <li>
              <Link href="#!"><a>Item1</a></Link>
            </li>
            <li>
              <Link href="#!"><a>Item2</a></Link>
            </li>
            <li>
              <Link href="#!"><a>Item3</a></Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="h5">Esse, laboriosam?</span>
          <ul>
            <li>
              <Link href="#!"><a>Item1</a></Link>
            </li>
            <li>
              <Link href="#!"><a>Item2</a></Link>
            </li>
            <li>
              <Link href="#!"><a>Item3</a></Link>
            </li>
          </ul>
        </div>
      </MenuContent>
    </UserMenuWrapper>
  )
}

export default UserMenu
