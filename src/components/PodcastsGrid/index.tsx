import * as React from 'react'
import { Container, Grid } from './style'
import { ConfigPodcast } from '~/types'
import PodcastCard from '~/components/PodcastCard'

interface Props {
  podcasts: ConfigPodcast[]
}

export default function PodcastsGrid(props: Props) {
  const { podcasts } = props

  return (
    <Container>
      <Grid>
        {podcasts.map((podcast) => {
          if (!podcast) return null
          return <PodcastCard key={podcast.id} podcast={podcast} />
        })}
      </Grid>
    </Container>
  )
}
