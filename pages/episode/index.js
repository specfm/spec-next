// @flow
import * as React from "react";
import { api } from '../../config'
import Page from '../../components/Page'
import type { SimplecastPodcast, SimplecastEpisode, GetInitialProps } from '../../types'
import EpisodeView from '../../components/EpisodeView'

type Props = {
  podcast: ?SimplecastPodcast,
  episode: SimplecastEpisode
}

class Episode extends React.Component<Props> {
  static async getInitialProps({ query }: GetInitialProps) {
    let podcast, episode

    if (query.slug && query.episodeId) {
      // match a slug to a podcast record in our config
      const configPodcast = api.getConfigPodcastFromSlug(query.slug)

      if (configPodcast && configPodcast.simplecastId) {
        // as long as the slug returns a valid config podcast, fetch the 
        // show from the api
        [
          podcast,
          episode
        ] = await Promise.all([
          api.getPodcast(configPodcast.simplecastId),
          api.getEpisode(configPodcast.simplecastId, parseInt(query.episodeId))
        ])
      }
    }

    return { podcast, episode };
  }

  render() {
    const { podcast, episode } = this.props

    if (podcast) {
      const configPodcast = api.getConfigPodcastFromId(podcast.id)
      
      if (configPodcast) {
        return (
          <Page>
            <EpisodeView podcast={configPodcast} episode={episode} />
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

export default Episode;
