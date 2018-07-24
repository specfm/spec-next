// @flow
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

type Props = {
  children: React.Node
}

export default class Page extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}