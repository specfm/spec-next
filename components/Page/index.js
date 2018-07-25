// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header'
import { theme } from '../theme'
import { Container, SectionHeading, Heading, Subheading, InnerContainer } from './style'

type Props = {
  children: React.Node
}

export { SectionHeading, Heading, Subheading }

export default class Page extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <InnerContainer>
            {this.props.children}
          </InnerContainer>
        </Container>
      </ThemeProvider>
    )
  }
}