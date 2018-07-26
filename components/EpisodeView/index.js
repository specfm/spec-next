// @flow
import * as React from "react";
import Head from 'next/head'
import type { ConfigPodcast, SimplecastEpisode } from '../../types'
import { Link as RouteLink } from '../../config/routes'
import { Grid, Sidebar, Content, Title, Description, Divider, Label } from './style'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import { getDateObject } from '../../lib/getDateObject'
import Markdown from '../Markdown'
import PodcastArt from "../PodcastArt";
import EpisodeShareButtons from '../EpisodeShareButtons'
import CommunityUpsell from '../CommunityUpsell'

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

        <Head>
          <title>Spec · {podcast.name} · {episode.title}</title>
          <meta content={`Spec · ${podcast.name} · ${episode.title}`} name="og:title" />
          <meta content={episode.description} name="og:description" />
          <meta content={podcast.artworkUrl} name="og:image" />
          <meta content={episode.audio_url} name="twitter:player" />
          <meta content={`Spec · ${podcast.name} · ${episode.title}`} name="twitter:title" />
          <meta name="apple-itunes-app" content={`app-id=${podcast.applePodcastId}`} />
          <meta name="theme-color" content={podcast.colors.button} />
        </Head>

        <Sidebar>
          <RouteLink route='podcast' params={{ slug: podcast.slug }}>
            <a>
              <PodcastArt src={podcast.artworkUrl} />
            </a>
          </RouteLink>
          
          <PodcastSubscriptionOptions podcast={podcast} />

          <Divider>
            <Label>
              Hosted By
            </Label>
          </Divider>

          <HostsGrid hosts={podcast.hosts} />

          <Divider>
            <Label>
              Community
            </Label>
          </Divider>
          
          <CommunityUpsell />
        </Sidebar>
        
        <Content>
          <Description>
            <RouteLink route='podcast' params={{ slug: podcast.slug }}>
              <a>
                {podcast.name}
              </a>
            </RouteLink>
            
            {' · '}
            {datestring}
          </Description>
          <Title>{episode.title}</Title>

          <EpisodeShareButtons episode={episode} podcast={podcast} />

          <audio src={episode.audio_url} controls preload="none"></audio>

          <Markdown>
            {episode.long_description}
          </Markdown>
          
        </Content>
      </Grid>
    )
  }
}

export default EpisodeView;
