// @flow
import * as React from 'react'
import Card from '../Card'
import { BlurredArt, Art } from './style'

type Props = {
  src: string,
  alt: string
}

class PodcastArt extends React.Component<Props> {
  render() {
    const { src, alt } = this.props

    return (
      <Card>
        <BlurredArt src={src} alt={alt} />
        <Art src={src} alt={alt} />
      </Card>
    )
  }
}

export default PodcastArt