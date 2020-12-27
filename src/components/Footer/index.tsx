import * as React from 'react'
import { Container, Description } from './style'

export default function Footer() {
  return (
    <Container>
      <Description>
        Copyright {new Date().getFullYear()} Spec Network, Inc.
      </Description>
    </Container>
  )
}
