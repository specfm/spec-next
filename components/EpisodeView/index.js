// @flow
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import type { ConfigPodcast, SimplecastEpisode } from '../../types';
import HostsGrid from '../HostsGrid';
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions';
import { getDateObject } from '../../lib/getDateObject';
import Markdown from '../Markdown';
import PodcastArt from '../PodcastArt';
import EpisodeShareButtons from '../EpisodeShareButtons';
import CommunityUpsell from '../CommunityUpsell';
import EpisodePlayButton from '../EpisodePlayButton';
import { PatreonSidebar, PatreonMain } from '../Patreon'
import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label,
} from './style';

type Props = {
  podcast: ConfigPodcast,
  episode: SimplecastEpisode,
};

class EpisodeView extends React.Component<Props> {
  render() {
    const { podcast, episode } = this.props;
    const { month, year, day } = getDateObject(episode.published_at);
    const datestring = `${month} ${day}, ${year}`;

    return (
      <Grid data-cy="episode-view">
        <Head>
          <title>
            Spec · {podcast.name} · {episode.title}
          </title>
          <meta
            content={`Spec · ${podcast.name} · ${episode.title}`}
            name="og:title"
            key="og:title"
          />
          <meta
            content={episode.description}
            name="og:description"
            key="og:description"
          />
          <meta
            content={`https://spec.fm${podcast.artworkUrl}`}
            name="og:image"
            key="og:image"
          />
          <meta
            content={episode.audio_url}
            name="twitter:player"
            key="twitter:player"
          />
          <meta
            content={`Spec · ${podcast.name} · ${episode.title}`}
            name="twitter:title"
            key="twitter:title"
          />
          <meta
            name="apple-itunes-app"
            content={`app-id=${podcast.applePodcastId}`}
            key="apple-itunes-app"
          />
          <meta
            name="theme-color"
            content={podcast.colors.button}
            key="theme-color"
          />
        </Head>

        <Sidebar>
          <Link 
            href="/podcasts/[slug]"
            as={`/podcasts/${podcast.slug}`}
          >
            <a>
              <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
            </a>
          </Link>

          <PodcastSubscriptionOptions podcast={podcast} />

          <Divider>
            <Label>Hosted By</Label>
          </Divider>

          <HostsGrid hosts={podcast.hosts} />

          <Divider>
            <Label>Community</Label>
          </Divider>

          <CommunityUpsell />
        </Sidebar>

        <Content>
          <Description>
            <Link 
              href="/podcasts/[slug]"
              as={`/podcasts/${podcast.slug}`}
            >
              <a>{podcast.name}</a>
            </Link>

            {' · '}
            {datestring}
          </Description>
          <Title>{episode.title}</Title>

          <EpisodePlayButton episode={episode} size="full" />

          <EpisodeShareButtons episode={episode} podcast={podcast} />

          {podcast.slug === 'design-details' && <PatreonMain />}

          <Markdown>{episode.long_description}</Markdown>
        </Content>
      </Grid>
    );
  }
}

export default EpisodeView;
