import * as React from 'react'
import Link from 'next/link'
import { ConfigPodcast } from '../../../types'
import { getDateObject } from '../../../lib/getDateObject'
import {
  SearchEpisodeContainer,
  Artwork,
  Meta,
  Title,
  Timestamp,
} from './style'

interface Episode {
  id: number
  publishedAt: string
  title: string
}

interface Props {
  podcast: ConfigPodcast
  episode: Episode
}

export default function SearchEpisode(props: Props) {
  const { podcast, episode } = props
  const { month, year, day } = getDateObject(episode.publishedAt)
  const datestring = `${month} ${day}, ${year}`

  return (
    <Link
      href="/podcasts/[slug]/[episodeId]"
      as={`/podcasts/${podcast.slug}/${episode.id}`}
    >
      <a>
        <SearchEpisodeContainer>
          <Artwork src={podcast.artworkUrl} alt={podcast.name} />
          <Meta>
            <Title>{episode.title}</Title>
            <Timestamp>{datestring}</Timestamp>
          </Meta>
        </SearchEpisodeContainer>
      </a>
    </Link>
  )
}
