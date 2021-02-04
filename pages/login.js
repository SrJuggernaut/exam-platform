import React from 'react'
import styled from '@emotion/styled'

import bP from '../helper/breakpoints'
import Layout from '../components/layout/BasicLayout'
import LoginForm from '../components/pages/login/LoginForm'

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  height: 85vh;
  width: 100%;
`
const LoginCard = styled.div`
  padding: 1rem;
  width: 100%;
  border: 1px solid var(--color-secondary);
  border-radius: var(--spacer);
  @media(min-width:${bP.xsm}){
    max-width: ${bP.xsm};
  }
  h1{
    text-align: center;
  }
`
function login (props) {
  return (
    <Layout>
      <LoginWrapper>
        <LoginCard>
          <h1>Login</h1>
          <LoginForm />
        </LoginCard>
      </LoginWrapper>
    </Layout>
  )
}

export default login
