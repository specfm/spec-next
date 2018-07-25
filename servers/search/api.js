// @flow
import "isomorphic-unfetch";
import type { SimplecastPodcast, SimplecastEpisode } from './types'

const prod = process.env.NODE_ENV === 'production'

const API_URL = prod
  ? 'https://api.spec.fm'
  : 'http://localhost:3001'

const fetchUrl = async (url: string) => {
  const req = fetch(`${API_URL}/${url}`);
  const res = await req;
  const json = await res.json();
  return json;
}

const api = {
  getPodcasts: async (): Promise<Array<SimplecastPodcast>> => await fetchUrl('podcasts.json'),
  getPodcast: async (id: number): Promise<SimplecastPodcast> => await fetchUrl(`podcasts/${id}.json`),
  getEpisodes: async (id: number): Promise<Array<SimplecastEpisode>> => await fetchUrl(`podcasts/${id}/episodes.json`),
}

export default api