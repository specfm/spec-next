// @flow
import * as React from "react";
import { api } from '../config'
import Page from '../components/Page'
import PodcastCard from '../components/PodcastCard'
import type { SimplecastPodcast } from '../types'

type Props = {
  podcasts: Array<SimplecastPodcast>
}

class Index extends React.Component<Props> {
  static async getInitialProps() {
    const podcasts = await api.getPodcasts()

    return { podcasts };
  }

  render() {
    const { podcasts } = this.props
    return (
      <Page>
        <div>
          {
            podcasts && podcasts.map(podcast => {
              if (!podcast) return null
              return <PodcastCard podcast={podcast} key={podcast.id} />
            })
          }
        </div>
      </Page>
    )
  }
}

export default Index;
