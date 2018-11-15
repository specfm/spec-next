// @flow
import api from '../../api';
import { indexPodcastInSearch } from '../../bull/queues';
import type { Job, IndexPodcastsJobData } from '../../bull/types';

require('now-env');
const debug = require('debug')('search:index-podcasts');

export default async (job: Job<IndexPodcastsJobData>) => {
  debug(`\nindex podcasts job: ${job.id}`);

  const podcasts = await api.getPodcasts();
  const ids = podcasts.map(podcast => podcast.id);
  const indexPodcastPromises = ids.map(id => indexPodcastInSearch.add({ id }));

  return Promise.all(indexPodcastPromises);
};
