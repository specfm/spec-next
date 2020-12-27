import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {
  Container,
  SectionHeading,
  Heading,
  Subheading,
  InnerContainer,
} from './style'

export { SectionHeading, Heading, Subheading }

interface Props {
  children: React.ReactElement | React.ReactElement[]
  dataCy?: string
}

export default function Page(props: Props) {
  const { children, dataCy } = props

  return (
    <Container data-cy={dataCy || undefined}>
      <Header />
      <InnerContainer>{children}</InnerContainer>
      <Footer />
    </Container>
  )
}
