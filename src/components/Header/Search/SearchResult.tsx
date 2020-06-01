import * as React from 'react'
import Link from 'next/link'
import { SearchResult as SearchResultType } from '~/types'
import { getDateObject } from '~/lib/getDateObject'
import {
  SearchEpisodeContainer,
  Artwork,
  Meta,
  Title,
  Timestamp,
} from './style'
import { getConfigPodcastFromId } from '~/lib/simplecast'

interface Episode {
  id: number
  publishedAt: string
  title: string
}

interface Props {
  episode: Episode
  hit: SearchResultType
}

export default function SearchResult(props: Props) {
  const { hit } = props

  const episode = hit

  if (!hit) return null

  const podcast = getConfigPodcastFromId(hit.podcastId)

  if (!podcast) return null

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
