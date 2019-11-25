import api from '../utils/api';
import indexPodcastInSearch from '../indexPodcast'

export default async () => {
  const podcasts = await api.getPodcasts();
  const ids = podcasts.map(podcast => podcast.id);
  const indexPodcastPromises = ids.map(id => indexPodcastInSearch(id));

  return Promise.all(indexPodcastPromises);
};
