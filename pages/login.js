import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import authContext from '../context/auth/authContext'
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
  h1, p{
    text-align: center;
  }
`
function login (props) {
  const { usuario } = useContext(authContext)
  const router = useRouter()
  useEffect(() => {
    if (Object.entries(usuario).length !== 0) {
      router.push('/')
    }
  })
  return (
    <Layout>
      <LoginWrapper>
        <LoginCard>
          <h1>Login</h1>
          <LoginForm />
          <p>¿No tienes una cuenta?<br/><Link href="/register"><a>registrate ahora</a></Link></p>
        </LoginCard>
      </LoginWrapper>
    </Layout>
  )
}

export default login
