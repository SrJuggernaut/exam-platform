import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import authContext from '../context/auth/authContext'
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
  h1, p{
    text-align: center;
  }
`
function register (props) {
  const { usuario } = useContext(authContext)
  const router = useRouter()
  useEffect(() => {
    if (Object.entries(usuario).length !== 0) {
      router.push('/')
    }
  })
  return (
    <Layout>
      <RegisterWrapper>
        <RegisterCard>
          <h1>Register</h1>
          <RegisterForm />
          <p>¿Ya tienes una cuenta?<br/><Link href="/login"><a>Inicia sesión</a></Link></p>
        </RegisterCard>
      </RegisterWrapper>
    </Layout>
  )
}

export default register
