// @flow
import * as React from "react";
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import Card from '../Card'
import { Grid, Sidebar, Content, Art, Title, Description } from './style'
import HostsGrid from '../HostsGrid'

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
        </Sidebar>
        <Content>
          <Title>{podcast.name}</Title>
          <Description>{podcast.description}</Description>
          <HostsGrid hosts={podcast.hosts} />
        </Content>
      </Grid>
    )
  }
}

export default PodcastView;
