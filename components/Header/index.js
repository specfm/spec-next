// @flow
import * as React from 'react'
import Link from 'next/link'
import { Container, Logo } from './style'
import { PrimaryButton, GhostButton, ButtonRow } from '../Button'
import Search from './Search'

type Props = {
  showHeaderShadow: boolean
}

class Header extends React.Component<Props> {
  render() {
    const { showHeaderShadow } = this.props

    return (
      <Container showHeaderShadow={showHeaderShadow}>
        <Link href={'/'}>
          <a style={{display:'flex',alignItems:'center'}}>
            <Logo src={'/static/img/logo.svg'} />
          </a>
        </Link>

        <Search showHeaderShadow={showHeaderShadow} />

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