// @flow
import * as React from 'react'
import { Container, Grid } from './style'
import { api, podcasts as config } from '../../config'
import PodcastCard from '../PodcastCard'
import type { SimplecastPodcast } from '../../types'

type Props = {
  podcasts: Array<SimplecastPodcast>
}

class PodcastsGrid extends React.Component<Props> {
  render() {
    const { podcasts } = this.props
    const layout = config.find(podcast => podcast && podcast.slug === 'layout')

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

          {
            layout &&
            <PodcastCard podcast={layout} />
          }
        </Grid>
      </Container>
    )
  }
}

export default PodcastsGrid