import React from 'react'
import { Global, css } from '@emotion/react'
import breakpoints from '../helper/breakpoints'

function GlobalStyles (props) {
  return (
    <Global
      styles={css`
        :root {
          --color-brand: #361d32;
          --color-brand-var: #b474aa;
          --color-secondary: #543c52;
          --color-secondary-var: #b394b0;
          --color-success: #12993f;
          --color-success-var: #67ed94;
          --color-danger: #9e222b;
          --color-danger-var: #e37c84;
          --color-warning: #ba7f01;
          --color-warning-var: #fecb5e;
          --color-info: #019fad;
          --color-info-var: #58f1fe;
          --color-contrast: #f55951;
          --color-light: #edd1ca;
          --color-light-var: #f1e8e6;
          --spacer: 1rem;
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1.3;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        body {
          font-family: 'Titillium Web';
          font-size: 16px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
          font-family: 'Amaranth';
          line-height: 1.25;
        }
        h1,
        .h1 {
          font-size: 3.5rem;
        }
        h2,
        .h2 {
          font-size: 3rem;
        }
        h3,
        .h3 {
          font-size: 2.5rem;
        }
        h4,
        .h4 {
          font-size: 2rem;
        }
        h5,
        .h5 {
          font-size: 1.5rem;
        }
        h6,
        .h6 {
          font-size: 1rem;
        }
        a {
          text-decoration: none;
          font-weight: 700;
          color: inherit;
          &:hover {
            color: var(--color-contrast);
            cursor: pointer;
          }
        }
        .container {
          margin-left: auto;
          margin-right: auto;
          @media (min-width: ${breakpoints.xsm}) {
            max-width: ${breakpoints.xsm};
          }
          @media (min-width: ${breakpoints.sm}) {
            max-width: ${breakpoints.sm};
          }
          @media (min-width: ${breakpoints.md}) {
            max-width: ${breakpoints.md};
          }
          @media (min-width: ${breakpoints.lg}) {
            max-width: ${breakpoints.lg};
          }
          @media (min-width: ${breakpoints.xlg}) {
            max-width: ${breakpoints.xlg};
          }
        }
      `}
    />
  )
}

export default GlobalStyles
