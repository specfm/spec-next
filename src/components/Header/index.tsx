import * as React from 'react'
import Link from 'next/link'
import Logo from '~/components/Logo'
import { Container, LogoContainer, ButtonRowContainer } from './style'
import { PrimaryButton, GhostButton } from '../Button'
import Search from './Search'

export default function Header() {
  return (
    <Container>
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>

      <Search />

      <ButtonRowContainer>
        <Link href="/about">
          <GhostButton>About</GhostButton>
        </Link>

        <Link href="/sponsors" style={{ marginLeft: '8px' }}>
          <PrimaryButton>Sponsor</PrimaryButton>
        </Link>
      </ButtonRowContainer>
    </Container>
  )
}
