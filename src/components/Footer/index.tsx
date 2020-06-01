import * as React from 'react'
import { Container, Description, Icons } from './style'
import Icon from '../Icon'

export default function Footer() {
  return (
    <Container>
      <Icons>
        <a
          href="https://twitter.com/specfm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="twitter" />
        </a>

        <a
          href="https://github.com/specfm/spec-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="github" />
        </a>

        <a
          href="https://spectrum.chat/specfm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="spectrum-solid" />
        </a>
      </Icons>

      <Description>
        Copyright {new Date().getFullYear()} Spec Network, Inc.
      </Description>
    </Container>
  )
}
