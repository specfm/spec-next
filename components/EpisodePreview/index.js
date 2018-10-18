// @flow
import * as React from 'react'
import type { SimplecastEpisode, ConfigPodcast } from '../../types'
import VisibilitySensor from 'react-visibility-sensor'
import { Link as RouteLink } from '../../config/routes'
import { Grid, Title, Timestamp,Divider } from './style'
import { getDateObject } from '../../lib/getDateObject'
import Markdown from '../Markdown'

type Props = {
  episode: SimplecastEpisode,
  podcast: ConfigPodcast
}

type State = {
  audioPlayerVisible: boolean
}

class EpisodePreview extends React.Component<Props, State> {
  state = { audioPlayerVisible: false }

  displayAudioPlayer = (visibility: boolean) => {
    return this.setState({ audioPlayerVisible: visibility })
  }
  
  render() {
    const { episode, podcast } = this.props
    const { audioPlayerVisible } = this.state
    const { month, year, day } = getDateObject(episode.published_at)
    const datestring = `${month} ${day}, ${year}`

    return (
      <VisibilitySensor onChange={this.displayAudioPlayer} partialVisibility={true}>
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

          {
            audioPlayerVisible
            ? <audio src={episode.audio_url} controls preload="none"></audio>
            : <div style={{ height: '66px'}} />
          }

          <Divider />
        </Grid>
      </VisibilitySensor>
    )
  }
}

export default EpisodePreview