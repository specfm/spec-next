// @flow
import * as React from 'react'
import { Container, Grid } from './style'
import api from '../../config/api'
import PodcastCard from '../PodcastCard'
import type { SimplecastPodcast } from '../../types'

type Props = {
  podcasts: Array<SimplecastPodcast>
}

class PodcastsGrid extends React.Component<Props> {
  render() {
    const { podcasts } = this.props
    
    return (
      <Container>
        <Grid>
          {
            podcasts.map(podcast => {
              const configPodcast = api.getConfigPodcastFromId(podcast.id)
              if (!configPodcast) return null
              return <PodcastCard key={podcast.id} podcast={configPodcast} />
            })
          }
        </Grid>
      </Container>
    )
  }
}

export default PodcastsGrid