// @flow
// $FlowIssue
import React, { useState } from 'react';
import type { SimplecastEpisode, ConfigPodcast } from '../../types';
import EpisodePreview from '../EpisodePreview';
import { Grid } from './style';
import { Button } from '../Button';

type Props = {
  episodes: ?Array<SimplecastEpisode>,
  podcast: ConfigPodcast,
};

export default function EpisodesGrid(props: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const { episodes: allEpisodes, podcast } = props;

  if (!allEpisodes) return null;
  const episodes = isExpanded ? allEpisodes : allEpisodes.slice(0, 5);

  return (
    <Grid data-cy="episodes-list">
      {episodes
        .filter(episode => episode.published)
        .map(episode => (
          <EpisodePreview
            podcast={podcast}
            episode={episode}
            key={episode.id}
          />
        ))}
      <Button
        style={{ marginBottom: '64px' }}
        size="large"
        onClick={() => setExpanded(true)}
      >
        View All Episodes
      </Button>
    </Grid>
  );
}
