import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import bp from '../../../helper/breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterWrapper = styled.footer`
  background-color: var(--color-brand);
  color: var(--color-light);
  padding-top: calc(var(--spacer) * 2);
  padding-bottom: calc(var(--spacer) * 2);
`
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacer);
  @media (min-width: ${bp.xsm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${bp.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const FooterColumn = styled.div`
  padding: var(--spacer);
`
const FooterHeading = styled.span`
  display: block;
  text-align: center;
`
const FooterList = styled.ul`
  padding-top: var(--spacer);
  padding-bottom: var(--spacer);
  li {
    line-height: 1.5;
  }
`
const FooterCopy = styled.div`
  text-align: center;
  padding-right: var(--spacer);
  padding-left: var(--spacer);
`
function Footer (props) {
  return (
    <FooterWrapper>
      <FooterContent className="container">
        <FooterColumn>
          <FooterHeading className="h4">Lorem, ipsum.</FooterHeading>
          <FooterList>
            <li>Lorem ipsum dolor sit.</li>
            <li>Doloremque earum culpa consectetur?</li>
            <li>Rerum recusandae laboriosam sapiente!</li>
            <li>Aliquid eum dolorum obcaecati!</li>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading className="h4">Obcaecati, dolorem.</FooterHeading>
          <FooterList>
            <li>Inventore quisquam veritatis hic?</li>
            <li>Perspiciatis, delectus. Voluptate, inventore.</li>
            <li>Soluta eligendi explicabo iusto?</li>
            <li>Doloribus corrupti a magnam.</li>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading className="h4">Informacion</FooterHeading>
          <FooterList>
            <li>
              <Link href="/panel">
                <a>Panel</a>
              </Link>
            </li>
            <li>Accusamus eveniet veniam nam?</li>
            <li>Illum voluptate itaque vel.</li>
            <li>Vero expedita illum quos.</li>
          </FooterList>
        </FooterColumn>
      </FooterContent>
      <FooterCopy className="container">
        <span>
          Hecho con <FontAwesomeIcon icon={['fal', 'heart']} fixedWidth /> y{' '}
          <FontAwesomeIcon icon={['fal', 'coffee']} fixedWidth /> por{' '}
          <a href="https://github.com/SrJuggernaut">SrJuggernaut</a>
        </span>
      </FooterCopy>
    </FooterWrapper>
  )
}

export default Footer
