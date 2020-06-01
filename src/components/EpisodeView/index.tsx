import * as React from 'react'
import Link from 'next/link'
import useDarkMode from 'use-dark-mode'
import { ConfigPodcast, SimplecastEpisode } from '../../types'
import HostsGrid from '../HostsGrid'
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions'
import { getDateObject } from '../../lib/getDateObject'
import Markdown from '../Markdown'
import PodcastArt from '../PodcastArt'
import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label,
} from './style'
import { NextSeo } from 'next-seo'

interface Props {
  podcast: ConfigPodcast
  episode: SimplecastEpisode
}

export default function EpisodeView(props: Props) {
  const { podcast, episode } = props

  if (!episode) {
    return (
      <Grid data-cy="episode-view">
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
          <Title>Episode not found</Title>
        </Content>
      </Grid>
    )
  }

  const { month, year, day } = getDateObject(episode.published_at)
  const datestring = `${month} ${day}, ${year}`
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })

  return (
    <Grid data-cy="episode-view">
      <NextSeo
        title={`${episode.title} · ${podcast.name}`}
        description={episode.description}
        openGraph={{
          title: `${episode.title} · ${podcast.name}`,
          description: episode.description,
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
        <Description>
          <Link href="/podcasts/[slug]" as={`/podcasts/${podcast.slug}`}>
            <a>{podcast.name}</a>
          </Link>

          {' · '}
          {datestring}
        </Description>
        <Title>{episode.title}</Title>

        <iframe
          frameBorder="0"
          height="200px"
          scrolling="no"
          seamless
          src={`https://player.simplecast.com/${episode.id}?dark=${value}`}
          width="100%"
          data-cy="latest-episode"
        />

        {episode.long_description && (
          <Markdown>{episode.long_description}</Markdown>
        )}
      </Content>
    </Grid>
  )
}
