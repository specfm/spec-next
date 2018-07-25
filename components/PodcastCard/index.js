// @flow
import * as React from 'react'
import { Link as RouteLink } from '../../config/routes'
import type { ConfigPodcast } from '../../types'
import Card from '../Card'
import { Art } from './style'

type Props = {
  podcast: ConfigPodcast
}

export default class PodcastCard extends React.Component<Props> {
  render() {
    const { podcast } = this.props

    return (
      <RouteLink key={podcast.id} route='podcast' params={{ slug: podcast.slug }}>
        <a>
          <Card>
            <Art src={podcast.artworkUrl} />
          </Card>
        </a>
      </RouteLink>
    )
  }
}