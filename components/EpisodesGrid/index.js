// @flow
import * as React from 'react'
import type { SimplecastEpisode, ConfigPodcast } from '../../types'
import EpisodePreview from '../EpisodePreview'
import { Grid } from './style'

type Props = {
  episodes: ?Array<SimplecastEpisode>,
  podcast: ConfigPodcast
}

class EpisodesGrid extends React.Component<Props> {
  render() {
    const { episodes, podcast } = this.props

    if (!episodes) return null

    return (
      <Grid data-cy="episodes-list">
        {
          episodes.filter(episode => episode.published).map(episode => {
            return <EpisodePreview podcast={podcast} episode={episode} key={episode.id} />
          })
        }
      </Grid>
    )
  }
}

export default EpisodesGrid