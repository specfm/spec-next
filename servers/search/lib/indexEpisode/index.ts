import transformEpisode from './transform-episode';
import initIndex from '../utils/algolia';

const searchIndex = initIndex('episodes');

export default async ({ showId, episode }) => {
  const searchableEpisode = transformEpisode(episode);
  return searchIndex.saveObject(searchableEpisode);
};
