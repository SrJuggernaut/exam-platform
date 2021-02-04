import React, { useContext } from 'react'
import Img from 'next/image'
import styled from '@emotion/styled'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import appContext from '../../../context/app/appContext'

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  background-color: var(--color-brand);
  color: var(--color-light);
  padding-bottom: calc(var(--spacer) / 2);
  padding-top: calc(var(--spacer) / 2);
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: var(--spacer);
  padding-left: var(--spacer);
`
const LogoWrapper = styled.div`
  align-self: flex-start;
`
const ButtonsWrapper = styled.div`
  align-self: flex-end;
`
const Buttton = styled.button`
  transition: all 0.25s;
  color: var(--color-light);
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: var(--color-contrast);
    color: var(--color-light-var);
  }
  &.active {
    background-color: var(--color-contrast);
    color: var(--color-light-var);
  }
`
function Header (props) {
  const app = useContext(appContext)
  const { navMenu, setNavMenu, userMenu, setUserMenu } = app
  const handleNavButtonClick = () => {
    setNavMenu(!navMenu)
    setUserMenu(false)
  }
  const handleUserButtonClick = () => {
    setUserMenu(!userMenu)
    setNavMenu(false)
  }
  return (
    <HeaderWrapper id="header">
      <HeaderContent className="container">
        <LogoWrapper>
          <Link href="/">
            <a>
              <Img src="/image/Exam.png" height="32" width="96" priority />
            </a>
          </Link>
        </LogoWrapper>
        <ButtonsWrapper>
          <Buttton
            className={`${navMenu ? 'active' : ''}`}
            onClick={handleNavButtonClick}
          >
            <FontAwesomeIcon icon={['fal', 'bars']} fixedWidth size="2x" />
          </Buttton>
          <Buttton
            className={`${userMenu ? 'active' : ''}`}
            onClick={handleUserButtonClick}
          >
            <FontAwesomeIcon icon={['fal', 'user']} fixedWidth size="2x" />
          </Buttton>
        </ButtonsWrapper>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
