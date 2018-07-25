// @flow
import * as React from "react";
import { api } from '../../config'
import Page from '../../components/Page'
import type { SimplecastPodcast, SimplecastEpisode, GetInitialProps } from '../../types'
import PodcastsGrid from "../../components/PodcastsGrid";
import PodcastView from '../../components/PodcastView'

type Props = {
  podcast: ?SimplecastPodcast,
  podcasts: ?Array<SimplecastPodcast>,
  episodes: ?Array<SimplecastEpisode>
}

class Podcasts extends React.Component<Props> {
  static async getInitialProps({ query }: GetInitialProps) {
    let podcast, podcasts, episodes

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

    if (!query.slug) {
      podcasts = await api.getPodcasts()
    }

    return { podcast, podcasts, episodes };
  }

  render() {
    const { podcast, podcasts, episodes } = this.props

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

    if (podcasts) {
      return (
        <Page>
          <PodcastsGrid podcasts={podcasts} />
        </Page>
      )
    }

    return (
      <Page>
        <p>Something bad happened</p>
      </Page>
    )
  }
}

export default Podcasts;
