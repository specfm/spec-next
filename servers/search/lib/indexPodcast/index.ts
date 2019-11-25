import api from '../utils/api';
import indexEpisodeInSearch from '../indexEpisode'

export default async (id: string) => {
  const episodes = await api.getEpisodes(id);
  const indexEpisodesPromises = episodes
    .filter(episode => episode.published)
    .map(episode =>
      // $FlowFixMe
      indexEpisodeInSearch({
        showId: id,
        episode,
      })
    );

  return Promise.all(indexEpisodesPromises);
};
