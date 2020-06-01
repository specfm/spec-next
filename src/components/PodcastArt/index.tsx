import * as React from 'react'
import Card from '../Card'
import { Art } from './style'

interface Props {
  src: string
  alt: string
}

export default function PodcastArt(props: Props) {
  const { src, alt } = props

  return (
    <Card>
      <Art src={src} alt={alt} />
    </Card>
  )
}
