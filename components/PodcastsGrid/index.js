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
    const sortedPodcasts = [363, 1034, 1386, 1684, 2128, 2693, 4211, 1332, 1457, 2070]
      .map(id => podcasts.find(podcast => podcast.id === id))
    const renderedPodcasts = [...sortedPodcasts, layout] 
    

    return (
      <Container>
        <Grid>
          {
            renderedPodcasts.map(podcast => {
              const configPodcast = podcast && podcast.id && api.getConfigPodcastFromId(podcast.id)
              if (!configPodcast) return null
              return <PodcastCard key={configPodcast.id} podcast={configPodcast} />
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