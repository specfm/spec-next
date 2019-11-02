// @flow
import 'isomorphic-unfetch';
import type { SimplecastPodcast, SimplecastEpisode } from '../../../types';

const prod = process.env.NODE_ENV === 'production';

const API_URL = prod ? 'https://spec.fm/api' : 'http://localhost:3000/api';

const fetchUrl = async (url: string) => {
  const req = fetch(`${API_URL}/${url}`);
  const res = await req;
  const json = await res.json();
  return json;
};

const api = {
  getPodcasts: async (): Promise<Array<SimplecastPodcast>> =>
    fetchUrl('podcasts'),
  getPodcast: async (id: number): Promise<SimplecastPodcast> =>
    fetchUrl(`podcasts/${id}`),
  getEpisodes: async (id: number): Promise<Array<SimplecastEpisode>> =>
    fetchUrl(`podcasts/${id}/episodes`),
};

export default api;
