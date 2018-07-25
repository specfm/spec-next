// @flow
import * as React from "react";
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import Card from '../Card'
import { Grid, Sidebar, Content, Art, Title, Description } from './style'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import EpisodesGrid from '../EpisodesGrid'

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
          <Card>
            <Art src={podcast.artworkUrl} />
          </Card>
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
