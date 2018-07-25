// @flow
require('now-env')
const debug = require('debug')('search:index-podcast');
import api from '../../api'
import { indexEpisodeInSearch } from '../../bull/queues'
import type { Job, IndexPodcastJobData } from '../../bull/types'

export default async (job: Job<IndexPodcastJobData>) => {
  debug(`\nindex podcast job: ${job.id}`);
  const { id } = job.data

  const episodes = await api.getEpisodes(id)
  const indexEpisodesPromises = episodes.map(episode => indexEpisodeInSearch.add({ 
    showId: id,
    episode
  }))

  return Promise.all(indexEpisodesPromises)
};