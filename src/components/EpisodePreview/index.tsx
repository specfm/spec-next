import * as React from 'react'
import Link from 'next/link'
import { SimplecastEpisode, ConfigPodcast } from '~/types'
import {
  Grid,
  Title,
  Timestamp,
  Divider,
  PlayTitleContainer,
  TextContainer,
} from './style'
import { getDateObject } from '~/lib/getDateObject'
import Markdown from '~/components/Markdown'

interface Props {
  episode: SimplecastEpisode
  podcast: ConfigPodcast
}

export default function EpisodePreview(props: Props) {
  const { episode, podcast } = props
  const { month, year, day } = getDateObject(episode.published_at)
  const datestring = `${month} ${day}, ${year}`

  return (
    <Grid>
      <PlayTitleContainer>
        <TextContainer>
          <Link
            href="/podcasts/[slug]/[episodeId]"
            as={`/podcasts/${podcast.slug}/${
              episode.legacy_id || episode.token
              }`}
          >
            <a>
              <Timestamp alt={datestring}>{datestring}</Timestamp>
            </a>
          </Link>

          <Link
            href="/podcasts/[slug]/[episodeId]"
            as={`/podcasts/${podcast.slug}/${
              episode.legacy_id || episode.token
              }`}
          >
            <a>
              <Title>{episode.title}</Title>
            </a>
          </Link>
        </TextContainer>
      </PlayTitleContainer>

      {episode.description && <Markdown>{episode.description}</Markdown>}

      <Divider />
    </Grid>
  )
}
