// @flow
import * as React from "react";
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import { Link as RouteLink } from '../../config/routes'
import { Grid, Sidebar, Content, Title, Description } from './style'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import EpisodesGrid from '../EpisodesGrid'
import PodcastArt from '../PodcastArt'

type Props = {
  podcast: ConfigPodcast,
  episodes: ?Array<SimplecastEpisode>
}

class PodcastView extends React.Component<Props> {
  render() {
    const { podcast, episodes } = this.props

    return (
      <Grid>
        <Sidebar>
          <RouteLink route='podcast' params={{ slug: podcast.slug }}>
            <a>
              <PodcastArt src={podcast.artworkUrl} />
            </a>
          </RouteLink>
          <PodcastSubscriptionOptions podcast={podcast} />
        </Sidebar>
        <Content>
          <Title>{podcast.name}</Title>
          <Description>{podcast.description}</Description>
          <HostsGrid hosts={podcast.hosts} />
          <EpisodesGrid episodes={episodes} podcast={podcast} />
        </Content>
      </Grid>
    )
  }
}

export default PodcastView;
