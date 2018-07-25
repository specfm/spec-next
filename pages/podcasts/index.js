// @flow
import * as React from "react";
import { api } from '../../config'
import Page from '../../components/Page'
import type { SimplecastPodcast } from '../../types'
import PodcastsGrid from "../../components/PodcastsGrid";

type Props = {
  podcasts: ?Array<SimplecastPodcast>,
}

class Podcasts extends React.Component<Props> {
  static async getInitialProps() {
    const podcasts = await api.getPodcasts()

    return { podcasts };
  }

  render() {
    const { podcasts } = this.props

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
