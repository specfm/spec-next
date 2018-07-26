// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Icon from '../Icon'
import Header from '../Header'
import Footer from '../Footer'
import { theme } from '../theme'
import { Container, SectionHeading, Heading, Subheading, InnerContainer, ScrollToTop } from './style'
import { throttle } from 'throttle-debounce';
import EmailCapture from '../EmailCapture';

export { SectionHeading, Heading, Subheading }

type Props = {
  children: React.Node
}

type State = {
  showHeaderShadow: boolean,
  scrollToTopVisible: boolean,
}

export default class Page extends React.Component<Props, State> {
  constructor() {
    super()

    this.state = { showHeaderShadow: false, scrollToTopVisible: false }
    this.handleScroll = throttle(300, this.handleScroll)
  }

  componentDidMount() {
    window && window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window && window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const showHeaderShadow = window && window.pageYOffset > 0
    const scrollToTopVisible = window && window.pageYOffset > 240
    return this.setState({ showHeaderShadow, scrollToTopVisible })
  }

  scrollToTop = () => {
    return window && window.scrollTo(0, 0)
  }

  render() {
    const { showHeaderShadow, scrollToTopVisible } = this.state

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header showHeaderShadow={showHeaderShadow}/>
          <InnerContainer>
            <EmailCapture />
            
            {this.props.children}
          </InnerContainer>
          <Footer />
          <ScrollToTop isVisible={scrollToTopVisible} onClick={this.scrollToTop}>
            <Icon glyph={'view-forward'} size={32} />
          </ScrollToTop>
        </Container>
      </ThemeProvider>
    )
  }
}