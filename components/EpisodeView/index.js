// @flow
import * as React from "react";
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import { Link as RouteLink } from '../../config/routes'
import Card from '../Card'
import { Grid, Sidebar, Content, Art, Title, Description } from './style'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import { getDateObject } from '../../lib/getDateObject'
import Markdown from '../Markdown'

type Props = {
  podcast: ConfigPodcast,
  episode: SimplecastEpisode
}

class EpisodeView extends React.Component<Props> {
  render() {
    const { podcast, episode } = this.props
    const { month, year, day } = getDateObject(episode.published_at)
    const datestring = `${month} ${day}, ${year}`

    return (
      <Grid>
        <Sidebar>
          <RouteLink route='podcast' params={{ slug: podcast.slug }}>
            <a>
              <Card>
                <Art src={podcast.artworkUrl} />
              </Card>
            </a>
          </RouteLink>
          <PodcastSubscriptionOptions podcast={podcast} />
        </Sidebar>
        
        <Content>
          <Description>{datestring}</Description>
          <Title>{episode.title}</Title>

          <audio src={episode.audio_url} controls preload="none"></audio>

          <Markdown>
            {episode.long_description}
          </Markdown>

          <HostsGrid hosts={podcast.hosts} />
        </Content>
      </Grid>
    )
  }
}

export default EpisodeView;
