// @flow
import * as React from 'react';
import type { ConfigPodcast } from '../../../types';
import { Link as RouteLink } from '../../../config/routes';
import { getDateObject } from '../../../lib/getDateObject';
import {
  SearchEpisodeContainer,
  Artwork,
  Meta,
  Title,
  Timestamp,
} from './style';

type Episode = {
  id: number,
  publishedAt: string,
  title: string,
};

type Props = {
  podcast: ConfigPodcast,
  episode: Episode,
};

class SearchEpisode extends React.Component<Props> {
  render() {
    const { podcast, episode } = this.props;
    const { month, year, day } = getDateObject(episode.publishedAt);
    const datestring = `${month} ${day}, ${year}`;

    return (
      <RouteLink
        route="episode"
        params={{ slug: podcast.slug, episodeId: episode.id }}
      >
        <a>
          <SearchEpisodeContainer>
            <Artwork src={podcast.artworkUrl} alt={podcast.name} />
            <Meta>
              <Title>{episode.title}</Title>
              <Timestamp>{datestring}</Timestamp>
            </Meta>
          </SearchEpisodeContainer>
        </a>
      </RouteLink>
    );
  }
}

export default SearchEpisode;
