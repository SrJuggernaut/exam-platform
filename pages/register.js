import React from 'react'
import styled from '@emotion/styled'

import bP from '../helper/breakpoints'
import Layout from '../components/layout/BasicLayout'
import RegisterForm from '../components/pages/register/RegisterForm'

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  height: 85vh;
  width: 100%;
`
const RegisterCard = styled.div`
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
function register (props) {
  return (
    <Layout>
      <RegisterWrapper>
        <RegisterCard>
          <h1>Register</h1>
          <RegisterForm />
        </RegisterCard>
      </RegisterWrapper>
    </Layout>
  )
}

export default register
