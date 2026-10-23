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
  const episodeHref = `/podcasts/${podcast.slug}/${
    episode.legacy_id || episode.token
  }`

  return (
    <Grid>
      <PlayTitleContainer>
        <TextContainer>
          <Link href={episodeHref}>
            <Timestamp alt={datestring}>{datestring}</Timestamp>
          </Link>

          <Link href={episodeHref}>
            <Title>{episode.title}</Title>
          </Link>
        </TextContainer>
      </PlayTitleContainer>

      {episode.description && <Markdown>{episode.description}</Markdown>}

      <Divider />
    </Grid>
  )
}
