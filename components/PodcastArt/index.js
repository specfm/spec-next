// @flow
import * as React from 'react'
import Card from '../Card'
import { BlurredArt, Art } from './style'

type Props = {
  src: string
}

class PodcastArt extends React.Component<Props> {
  render() {
    const { src } = this.props

    return (
      <Card>
        <BlurredArt src={src} />
        <Art src={src} />
      </Card>
    )
  }
}

export default PodcastArt