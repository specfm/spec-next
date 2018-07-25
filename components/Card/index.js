// @flow
import * as React from 'react'
import { StyledCard } from './style'

type Props = {
  children: React.Node
}

class Card extends React.Component<Props> {
  render() {
    return <StyledCard>{this.props.children}</StyledCard>
  }
}

export default Card