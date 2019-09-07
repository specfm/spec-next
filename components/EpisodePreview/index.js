// @flow
import * as React from 'react';
import Link from 'next/link'
import type { SimplecastEpisode, ConfigPodcast } from '../../types';
import {
  Grid,
  Title,
  Timestamp,
  Divider,
  PlayTitleContainer,
  TextContainer,
} from './style';
import { getDateObject } from '../../lib/getDateObject';
import Markdown from '../Markdown';
import EpisodePlayButton from '../EpisodePlayButton';

type Props = {
  episode: SimplecastEpisode,
  podcast: ConfigPodcast,
};

type State = {
  audioPlayerVisible: boolean,
};

class EpisodePreview extends React.Component<Props, State> {
  render() {
    const { episode, podcast } = this.props;
    const { month, year, day } = getDateObject(episode.published_at);
    const datestring = `${month} ${day}, ${year}`;

    return (
      <Grid>
        <PlayTitleContainer>
          <EpisodePlayButton episode={episode} size="mini" />

          <TextContainer>
            <Link
              href="/podcasts/[slug]/[episodeId]"
              as={`/podcasts/${podcast.slug}/${episode.id}`}
            >
              <a>
                <Timestamp alt={datestring}>{datestring}</Timestamp>
              </a>
            </Link>

            <Link
              href="/podcasts/[slug]/[episodeId]"
              as={`/podcasts/${podcast.slug}/${episode.id}`}
            >
              <a>
                <Title>{episode.title}</Title>
              </a>
            </Link>
          </TextContainer>
        </PlayTitleContainer>

        <Markdown>{episode.description}</Markdown>

        <Divider />
      </Grid>
    );
  }
}

export default EpisodePreview;
