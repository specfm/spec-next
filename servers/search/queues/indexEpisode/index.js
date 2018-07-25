// @flow
require('now-env')
const debug = require('debug')('search:index-episode');
import type { Job, IndexEpisodeJobData } from '../../bull/types'
import transformEpisode from './transform-episode'
import initIndex from '../../utils/algolia';
const searchIndex = initIndex('episodes');

export default async (job: Job<IndexEpisodeJobData>) => {
  debug(`\nindex episode job: ${job.id}`);
  const { episode } = job.data
  const searchableEpisode = transformEpisode(episode)
  return searchIndex.saveObject(searchableEpisode)
};