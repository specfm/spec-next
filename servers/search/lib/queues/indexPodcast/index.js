// @flow
import api from '../../api';
import { indexEpisodeInSearch } from '../../bull/queues';
import type { Job, IndexPodcastJobData } from '../../bull/types';

require('now-env');
const debug = require('debug')('search:index-podcast');

export default async (job: Job<IndexPodcastJobData>) => {
  debug(`\nindex podcast job: ${job.id}`);
  const { id } = job.data;

  const episodes = await api.getEpisodes(id);
  const indexEpisodesPromises = episodes
    .filter(episode => episode.published)
    .map(episode =>
      indexEpisodeInSearch.add({
        showId: id,
        episode,
      })
    );

  return Promise.all(indexEpisodesPromises);
};
