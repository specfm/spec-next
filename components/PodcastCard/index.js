// @flow
import * as React from 'react';
import Link from 'next/link'
import type { ConfigPodcast } from '../../types';
import PodcastArt from '../PodcastArt';

type Props = {
  podcast: ConfigPodcast,
};

export default class PodcastCard extends React.Component<Props> {
  render() {
    const { podcast } = this.props;

    if (podcast.slug === 'layout') {
      return (
        <a
          data-cy="layout-podcast"
          href="https://layout.fm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
        </a>
      );
    }

    return (
      <Link
        key={podcast.id}
        href="/podcasts/[slug]"
        as={`/podcasts/${podcast.slug}`}
      >
        <a data-cy={`${podcast.slug}-podcast`}>
          <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
        </a>
      </Link>
    );
  }
}
