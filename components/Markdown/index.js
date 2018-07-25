// @flow
import * as React from 'react'
import { Notes } from './style'

type Props = {
  children: React.Node
}

class Markdown extends React.Component<Props> {
  render() {
    return (
      <Notes>
        {this.props.children}
      </Notes>
    )
  }
}

export default Markdown