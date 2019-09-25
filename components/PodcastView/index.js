// @flow
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import type { ConfigPodcast, SimplecastEpisode } from '../../types';
import {
  Grid,
  Sidebar,
  Content,
  Title,
  Description,
  Divider,
  Label,
  MobileArt,
  MobileSubscriptionOptions,
  FeaturedEpisode,
  FeaturedEpisodesList,
} from './style';
import HostsGrid from '../HostsGrid';
import Icon from '../Icon';
import PodcastSubscriptionOptions from '../PodcastSubscriptionOptions';
import EpisodesGrid from '../EpisodesGrid';
import PodcastArt from '../PodcastArt';
import PodcastShareButtons from '../PodcastShareButtons';
import CommunityUpsell from '../CommunityUpsell';
import { CustomNotice } from '../Blog';
import { PatreonSidebar, PatreonMain } from '../Patreon'

type Props = {
  podcast: ConfigPodcast,
  episodes: ?Array<SimplecastEpisode>,
};

class PodcastView extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    const curr = this.props;
    if (curr.podcast !== nextProps.podcast) return true;
    return false;
  }

  render() {
    const { podcast, episodes } = this.props;
    const featuredEpisodes =
      podcast.featuredEpisodes.length > 0 &&
      episodes &&
      episodes.length > 0 &&
      podcast.featuredEpisodes.map(id => episodes.filter(e => e.id === id)[0]);

    return (
      <Grid data-cy="podcast-view">
        <Head>
          <title>Spec · {podcast.name}</title>
          <meta
            content={`Spec · ${podcast.name}`}
            name="og:title"
            key="og:title"
          />
          <meta
            content={podcast.description}
            name="og:description"
            key="og:description"
          />
          <meta
            content={`https://spec.fm${podcast.artworkUrl}`}
            name="og:image"
            key="og:image"
          />
          {episodes && episodes.length > 0 && (
            <meta
              content={episodes[0].audio_url}
              name="twitter:player"
              key="twitter:player"
            />
          )}
          <meta
            content={`Spec · ${podcast.name}`}
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
          <Link href="/podcasts/[slug]" as={`/podcasts/${podcast.slug}`}>
            <a>
              <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
            </a>
          </Link>
          <PodcastSubscriptionOptions podcast={podcast} />

          {
            podcast.slug === 'design-details' && (
              <React.Fragment>
                <Divider>
                  <Label>Listener supported</Label>
                </Divider>
                <PatreonSidebar />
              </React.Fragment>
            )
          }

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
          <MobileArt>
            <Link href="/podcasts/[slug]" as={`/podcasts/${podcast.slug}`}>
              <a>
                <PodcastArt src={podcast.artworkUrl} alt={podcast.name} />
              </a>
            </Link>
          </MobileArt>
          <Title>{podcast.name}</Title>
          <Description>{podcast.description}</Description>

          <MobileSubscriptionOptions>
            <PodcastSubscriptionOptions podcast={podcast} />
          </MobileSubscriptionOptions>


          {
            podcast.slug === 'design-details'
            ? <PatreonMain />
            : <PodcastShareButtons podcast={podcast} />
          }

          {featuredEpisodes && (
            <CustomNotice color={podcast.colors.button}>
              <CustomNotice.Title color={podcast.colors.text}>
                Featured episodes
              </CustomNotice.Title>

              <FeaturedEpisodesList>
                {featuredEpisodes.map(fe => (
                  <FeaturedEpisode key={fe.id} color={podcast.colors.text}>
                    <Link
                      href="/podcasts/[slug]/[episodeId]" 
                      as={`/podcasts/${podcast.slug}/${fe.id}`}
                    >
                      <a>
                        <Icon glyph="view-forward" size={16} />
                        {fe.title}
                      </a>
                    </Link>
                  </FeaturedEpisode>
                ))}
              </FeaturedEpisodesList>
            </CustomNotice>
          )}

          <EpisodesGrid episodes={episodes} podcast={podcast} />
        </Content>
      </Grid>
    );
  }
}

export default PodcastView;
