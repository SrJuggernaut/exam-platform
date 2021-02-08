import React from 'react'
import propTypes from 'prop-types'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCoffee,
  faHeart,
  faTimes,
  faUser
} from '@fortawesome/pro-light-svg-icons'

import AppState from '../context/app/AppState'
import AuthState from '../context/auth/AuthState'

import GlobalStyles from '../styles/GlobalStyles'
import FontAwesomeStyles from '../styles/FontAwesomeStyles'

library.add(faBars, faUser, faHeart, faCoffee, faTimes)

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <AppState>
        <AuthState>
          <Head>
            <title>Exam</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Amaranth:ital@1&family=Titillium+Web&display=swap"
              rel="stylesheet"
            />
          </Head>
          <FontAwesomeStyles />
          <GlobalStyles />
          <Component {...pageProps} />
        </AuthState>
      </AppState>
    </>
  )
}

MyApp.propTypes = {
  Component: propTypes.elementType.isRequired,
  pageProps: propTypes.object
}

export default MyApp
