// @flow
import * as React from "react";
import Head from 'next/head'
import { podcasts } from '../config'
import Page, { SectionHeading, Heading, Subheading } from '../components/Page'
import type { ConfigPodcast, GetInitialProps } from '../types'
import PodcastGrid from '../components/PodcastsGrid'
import ResourcesGrid from '../components/ResourcesGrid'
import sortPodcasts from '../lib/scToConfigPodcasts'

type Props = {
  podcasts: Array<ConfigPodcast>
}

class Index extends React.Component<Props> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`)
    }

    const sorted = sortPodcasts(podcasts)
    return { podcasts: sorted };
  }

  render() {
    const { podcasts } = this.props
    return (
      <Page dataCy={'home-view'}>
        <Head>
          <title>Spec · Level Up</title>
          <meta content={"Spec · Level Up"} name="og:title" key="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" key="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" key="twitter:title" />
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
