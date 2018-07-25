// @flow
import * as React from "react";
import { api } from '../../config'
import Page from '../../components/Page'
import type { SimplecastPodcast, SimplecastEpisode, GetInitialProps } from '../../types'
import PodcastView from '../../components/PodcastView'

type Props = {
  podcast: ?SimplecastPodcast,
  episodes: ?Array<SimplecastEpisode>
}

class Podcast extends React.Component<Props> {
  static async getInitialProps({ query }: GetInitialProps) {
    let podcast, episodes

    if (query.slug) {
      // match a slug to a podcast record in our config
      const configPodcast = api.getConfigPodcastFromSlug(query.slug)

      if (configPodcast) {
        // as long as the slug returns a valid config podcast, fetch the 
        // show from the api
        [
          podcast,
          episodes
        ] = await Promise.all([
          api.getPodcast(configPodcast.simplecastId),
          api.getEpisodes(configPodcast.simplecastId)
        ])
      }
    }

    return { podcast, episodes };
  }

  render() {
    const { podcast, episodes } = this.props

    if (podcast) {
      const configPodcast = api.getConfigPodcastFromId(podcast.id)
      
      if (configPodcast) {
        return (
          <Page>
            <PodcastView podcast={configPodcast} episodes={episodes} />
          </Page>
        )
      }

      return null
    } 

    return (
      <Page>
        <p>Something bad happened</p>
      </Page>
    )
  }
}

export default Podcast;
