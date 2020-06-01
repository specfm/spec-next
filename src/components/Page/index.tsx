import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EmailCapture from '../EmailCapture'
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
  showEmailCapture?: boolean
  dataCy?: string
}

export default function Page(props: Props) {
  const { children, showEmailCapture = true, dataCy } = props

  return (
    <Container data-cy={dataCy || undefined}>
      <Header />
      <InnerContainer>
        {showEmailCapture && <EmailCapture />}
        {children}
      </InnerContainer>
      <Footer />
    </Container>
  )
}
