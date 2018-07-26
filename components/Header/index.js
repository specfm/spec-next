// @flow
import * as React from 'react'
import Link from 'next/link'
import { Container, Logo } from './style'
import { PrimaryButton, GhostButton, ButtonRow } from '../Button'
import Search from './Search'

class Header extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Link href={'/'}>
          <a style={{display:'flex',alignItems:'center'}}>
            <Logo src={'/static/img/logo.svg'} />
          </a>
        </Link>

        <Search />

        <ButtonRow style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href={'/about'}>
            <a>
              <GhostButton>About</GhostButton>
            </a>
          </Link>
          
          <Link href={'/sponsors'}>
            <a style={{marginLeft:'8px'}}>
              <PrimaryButton>Sponsor</PrimaryButton>
            </a>
          </Link>
        </ButtonRow>
      </Container>
    )
  }
}

export default Header