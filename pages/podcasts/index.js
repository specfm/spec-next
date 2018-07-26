// @flow
import * as React from "react";
import Head from 'next/head'
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

  renderHead = () => {
    return (
      <Head>
        <title>Spec · Podcasts</title>
        <meta content={"Spec · Podcasts"} name="og:title" />
        <meta content={"Level up by listening to podcasts from the best in the industry"} name="og:description" />
        <meta content="/static/img/shows/developertea" name="og:image" />
        <meta content={"Spec · Podcasts"} name="twitter:title" />
      </Head>
    )
  }

  render() {
    const { podcasts } = this.props

    if (podcasts) {
      return (
        <Page>
          {this.renderHead()}
          <PodcastsGrid podcasts={podcasts} />
        </Page>
      )
    }

    return (
      <Page>{this.renderHead()}</Page>
    )
  }
}

export default Podcasts;
