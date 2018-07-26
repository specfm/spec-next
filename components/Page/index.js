// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
import { theme } from '../theme'
import { Container, SectionHeading, Heading, Subheading, InnerContainer } from './style'

export { SectionHeading, Heading, Subheading }

type Props = {
  children: React.Node
}

type State = {
  isScrolled: boolean
}

export default class Page extends React.Component<Props, State> {
  ref: any;
  ref: null;

  constructor() {
    super()
    this.state = { isScrolled: false }
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const isScrolled = window && window.scrollY > 0
    return this.setState({ isScrolled })
  }

  render() {
    const { isScrolled } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Container innerRef={c => this.ref = c}>
          <Header isScrolled={isScrolled}/>
          <InnerContainer>
            {this.props.children}
          </InnerContainer>
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}