import * as React from 'react'
import { SimplecastEpisode, ConfigPodcast } from '../../types'
import EpisodePreview from '../EpisodePreview'
import { Grid } from './style'

interface Props {
  episodes: SimplecastEpisode[]
  podcast: ConfigPodcast
}

export default function EpisodesGrid(props: Props) {
  const { episodes, podcast } = props

  if (!episodes) return null

  return (
    <Grid data-cy="episodes-list">
      {episodes.map((episode) => (
        <EpisodePreview podcast={podcast} episode={episode} key={episode.id} />
      ))}
    </Grid>
  )
}
