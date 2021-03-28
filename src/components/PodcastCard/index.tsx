import * as React from 'react'
import Link from 'next/link'
import { ConfigPodcast } from '~/types'
import PodcastArt from '~/components/PodcastArt'

interface Props {
  podcast: ConfigPodcast
}

export default function PodcastCard(props: Props) {
  const { podcast } = props

  if (
    podcast &&
    (podcast.slug === 'layout' || podcast.slug === 'design-details' || podcast.slug === 'swift-unwrapped')
  ) {
    return (
      <a data-cy={`${podcast.slug}-podcast`} href={podcast.websiteUrl}>
        <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
      </a>
    )
  }

  if (!podcast) return null

  return (
    <Link
      key={podcast.id}
      href="/podcasts/[slug]"
      as={`/podcasts/${podcast.slug}`}
    >
      <a data-cy={`${podcast.slug}-podcast`}>
        <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
      </a>
    </Link>
  )
}
