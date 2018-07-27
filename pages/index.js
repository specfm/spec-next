// @flow
import * as React from "react";
import Head from 'next/head'
import { api } from '../config'
import Page, { SectionHeading, Heading, Subheading } from '../components/Page'
import type { SimplecastPodcast } from '../types'
import PodcastGrid from '../components/PodcastsGrid'
import ResourcesGrid from '../components/ResourcesGrid'

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
      <Page dataCy={'home-view'}>
        <Head>
          <title>Spec · Level Up</title>
          <meta content={"Spec · Level Up"} name="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" />
        </Head>


        <SectionHeading>
          <Heading>Podcasts</Heading>
          <Subheading>Level up by listening to podcasts from the best in the industry</Subheading>
        </SectionHeading>

        {
          podcasts &&
          <PodcastGrid podcasts={podcasts} />
        }

        <SectionHeading>
          <Heading>Resources</Heading>
          <Subheading>Curated resources for designers and developers</Subheading>
        </SectionHeading>

        <ResourcesGrid />
      </Page>
    )
  }
}

export default Index;
