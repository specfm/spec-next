// @flow
import * as React from "react";
import { api } from '../../config'
import { Link as RouteLink } from '../../config/routes'
import Link from 'next/link'
import Page from '../../components/Page'
import type { SimplecastPodcast, GetInitialProps } from '../../types'

type Props = {
  podcast: ?SimplecastPodcast,
  podcasts: ?Array<SimplecastPodcast>
}

class Podcasts extends React.Component<Props> {
  static async getInitialProps({ query }: GetInitialProps) {
    let podcast, podcasts

    if (query.slug) {
      // match a slug to a podcast record in our config
      const configPodcast = api.getConfigPodcastFromSlug(query.slug)

      if (configPodcast) {
        // as long as the slug returns a valid config podcast, fetch the 
        // show from the api
        podcast = await api.getPodcast(configPodcast.simplecastId)
      }
    }

    if (!query.slug) {
      podcasts = await api.getPodcasts()
    }

    return { podcast, podcasts };
  }

  render() {
    const { podcast, podcasts } = this.props

    if (podcast) {
      return (
        <Page>
          <div>
            <p>{podcast.title}</p>
            <Link href={'/podcasts'}>
              <a>Back to podcasts</a>
            </Link>
          </div>
        </Page>
      )
    } 

    if (podcasts) {
      return (
        <Page>
          <div>
            {
              podcasts.map(podcast => {
                const configPodcast = api.getConfigPodcastFromId(podcast.id)
                
                if (configPodcast) {
                  return (
                    <RouteLink key={podcast.id} route='podcasts' params={{ slug: configPodcast.slug }}>
                      <a>{configPodcast.name}</a>
                    </RouteLink>
                  )
                }

                return null
              })
            }
          </div>
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
