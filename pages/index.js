// @flow
import * as React from "react";
import { api } from '../config'
import Page, { SectionHeading, Heading, Subheading } from '../components/Page'
import type { SimplecastPodcast } from '../types'
import PodcastGrid from '../components/PodcastsGrid'

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
        <SectionHeading>
          <Heading>Podcasts</Heading>
          <Subheading>Level up by listening to podcasts from the best in the industry</Subheading>
        </SectionHeading>

        <PodcastGrid podcasts={podcasts} />

        <SectionHeading>
          <Heading>Resources</Heading>
          <Subheading>Curated resources for designers and developers</Subheading>
        </SectionHeading>
      </Page>
    )
  }
}

export default Index;
