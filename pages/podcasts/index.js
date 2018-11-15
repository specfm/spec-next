// @flow
import * as React from 'react';
import Head from 'next/head';
import { podcasts as configPodcasts } from '../../config';
import Page, {
  SectionHeading,
  Heading,
  Subheading,
} from '../../components/Page';
import type { ConfigPodcast, GetInitialProps } from '../../types';
import PodcastsGrid from '../../components/PodcastsGrid';
import sortPodcasts from '../../lib/scToConfigPodcasts';

type Props = {
  podcasts: ?Array<ConfigPodcast>,
};

class Podcasts extends React.Component<Props> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    const podcasts = sortPodcasts(configPodcasts);
    return { podcasts };
  }

  renderHead = () => (
    <Head>
      <title>Spec · Podcasts</title>
      <meta content="Spec · Podcasts" name="og:title" key="og:title" />
      <meta
        content="Level up by listening to podcasts from the best in the industry"
        name="og:description"
        key="og:description"
      />
      <meta
        content="/static/img/shows/developertea"
        name="og:image"
        key="og:image"
      />
      <meta content="Spec · Podcasts" name="twitter:title" key="og:image" />
    </Head>
  );

  render() {
    const { podcasts } = this.props;

    if (podcasts) {
      return (
        <Page dataCy="podcasts-view">
          {this.renderHead()}

          <SectionHeading>
            <Heading>Podcasts</Heading>
            <Subheading>
              Level up by listening to podcasts from the best in the industry
            </Subheading>
          </SectionHeading>

          <PodcastsGrid podcasts={podcasts} />
        </Page>
      );
    }

    return <Page>{this.renderHead()}</Page>;
  }
}

export default Podcasts;
