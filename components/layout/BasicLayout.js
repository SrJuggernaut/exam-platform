import React, { useState } from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import Header from './basicLayout/Header'
import Footer from './basicLayout/Footer'
import Menu from './basicLayout/Menu'

const Body = styled.div`
  min-height: 85vh;
`

function BasicLayout ({ children }) {
  const [navMenu, setNavMenu] = useState(false)
  const [userMenu, setUserMenu] = useState(false)
  return (
    <>
      <Header navMenu={navMenu} setNavMenu={setNavMenu} userMenu={userMenu} setUserMenu={setUserMenu} />
      <Menu navMenu={navMenu} userMenu={userMenu} />
      <Body className="container">
        {children}
      </Body>
      <Footer />
    </>
  )
}

BasicLayout.propTypes = {
  children: propTypes.node
}

export default BasicLayout
