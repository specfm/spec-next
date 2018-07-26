// @flow
import * as React from 'react'
import type { SimplecastEpisode, ConfigPodcast } from '../../types'
import { Link as RouteLink } from '../../config/routes'
import { Grid, Title, Timestamp,Divider } from './style'
import { getDateObject } from '../../lib/getDateObject'
import Markdown from '../Markdown'

type Props = {
  episode: SimplecastEpisode,
  podcast: ConfigPodcast
}

class EpisodePreview extends React.Component<Props> {
  render() {
    const { episode, podcast } = this.props
    const { month, year, day } = getDateObject(episode.published_at)
    const datestring = `${month} ${day}, ${year}`

    return (
      <Grid>
        <RouteLink route='episode' params={{ slug: podcast.slug, episodeId: episode.id }}>
          <a>
            <Timestamp alt={datestring}>{datestring}</Timestamp>
          </a>
        </RouteLink>

        <RouteLink route='episode' params={{ slug: podcast.slug, episodeId: episode.id }}>
          <a>
            <Title>{episode.title}</Title>
          </a>
        </RouteLink>

        <Markdown>{episode.description}</Markdown>
        <audio src={episode.audio_url} controls preload="none"></audio>
        <Divider />
      </Grid>
    )
  }
}

export default EpisodePreview