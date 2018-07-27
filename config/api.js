// @flow
import "isomorphic-unfetch";
import podcasts from './podcasts'
import type { ConfigPodcast, SimplecastPodcast, SimplecastEpisode } from '../types'

const prod = process.env.NODE_ENV === 'production'

const API_URL = prod
  ? 'https://api.spec.fm'
  : 'http://localhost:3001'

const fetchUrl = async (url: string) => {
  try {
    const req = fetch(`${API_URL}/${url}`);
    const res = await req;
    const json = await res.json();
    return json;
  } catch (err) {
    return Promise.resolve()
  }
}

const api = {
  getPodcasts: async (): Promise<?Array<?SimplecastPodcast>> => await fetchUrl('podcasts.json'),
  getPodcast: async (id: ?number): Promise<?SimplecastPodcast> => id ? await fetchUrl(`podcasts/${id}.json`) : null,
  getEpisodes: async (id: ?number): Promise<?Array<?SimplecastEpisode>> => id ? await fetchUrl(`podcasts/${id}/episodes.json`) : [],
  getEpisode: async (showId: ?number, episodeId: number): Promise<?SimplecastEpisode> => showId ? await fetchUrl(`podcasts/${showId}/episodes/${episodeId}.json`) : null,
  getConfigPodcastFromSlug: (slug: string): ?ConfigPodcast => podcasts.find(podcast => podcast && podcast.slug === slug),
  getConfigPodcastFromId: (id: number): ?ConfigPodcast => podcasts.find(podcast => podcast && podcast.simplecastId && podcast.simplecastId === id)
}

export default api