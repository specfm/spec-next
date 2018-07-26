// @flow
import * as React from "react";
import Head from 'next/head'
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import { Link as RouteLink } from '../../config/routes'
import { Grid, Sidebar, Content, Title, Description } from './style'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import EpisodesGrid from '../EpisodesGrid'
import PodcastArt from '../PodcastArt'
import PodcastShareButtons from '../PodcastShareButtons'

type Props = {
  podcast: ConfigPodcast,
  episodes: ?Array<SimplecastEpisode>
}

class PodcastView extends React.Component<Props> {
  render() {
    const { podcast, episodes } = this.props

    return (
      <Grid>

        <Head>
          <title>Spec · {podcast.name}</title>
          <meta content={`Spec · ${podcast.name}`} name="og:title" />
          <meta content={podcast.description} name="og:description" />
          <meta content={podcast.artworkUrl} name="og:image" />
          <meta content={episodes[0].audio_url} name="twitter:player" />
          <meta content={`Spec · ${podcast.name}`} name="twitter:title" />
          <meta name="apple-itunes-app" content={`app-id=${podcast.applePodcastId}`} />
        </Head>

        <Sidebar>
          <RouteLink route='podcast' params={{ slug: podcast.slug }}>
            <a>
              <PodcastArt src={podcast.artworkUrl} />
            </a>
          </RouteLink>
          <PodcastSubscriptionOptions podcast={podcast} />
          <HostsGrid hosts={podcast.hosts} />
        </Sidebar>
        
        <Content>
          <Title>{podcast.name}</Title>
          <Description>{podcast.description}</Description>
          <PodcastShareButtons podcast={podcast} />
          <EpisodesGrid episodes={episodes} podcast={podcast} />
        </Content>

      </Grid>
    )
  }
}

export default PodcastView;
