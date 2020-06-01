import * as React from 'react'
import Link from 'next/link'
import { ConfigPodcast, SimplecastEpisode } from '../../types'
import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label,
  MobileArt,
  MobileSubscriptionOptions,
} from './style'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import EpisodesGrid from '../EpisodesGrid'
import PodcastArt from '../PodcastArt'
import { NextSeo } from 'next-seo'

interface Props {
  podcast: ConfigPodcast
  episodes: SimplecastEpisode[]
}

export default function PodcastView(props: Props) {
  const { podcast, episodes } = props

  return (
    <Grid data-cy="podcast-view">
      <NextSeo
        title={podcast.name}
        description={podcast.description}
        openGraph={{
          title: podcast.name,
          description: podcast.description,
          images: [
            {
              url: `https://spec.fm${podcast.artworkUrl}`,
              alt: podcast.name,
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: 'apple-itunes-app',
            content: `app-id=${podcast.applePodcastId}`,
          },
          {
            property: 'theme-color',
            content: podcast.colors.button,
          },
        ]}
      />
      <Sidebar>
        <Link href="/podcasts/[slug]" as={`/podcasts/${podcast.slug}`}>
          <a>
            <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
          </a>
        </Link>
        <PodcastSubscriptionOptions podcast={podcast} />

        <Divider>
          <Label>Hosted By</Label>
        </Divider>

        <HostsGrid hosts={podcast.hosts} />
      </Sidebar>

      <Content>
        <MobileArt>
          <Link href="/podcasts/[slug]" as={`/podcasts/${podcast.slug}`}>
            <a>
              <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
            </a>
          </Link>
        </MobileArt>
        <Title>{podcast.name}</Title>
        <Description>{podcast.description}</Description>

        <MobileSubscriptionOptions>
          <PodcastSubscriptionOptions podcast={podcast} />
        </MobileSubscriptionOptions>

        <EpisodesGrid episodes={episodes} podcast={podcast} />
      </Content>
    </Grid>
  )
}
