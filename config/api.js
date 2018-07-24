// @flow
import "isomorphic-unfetch";
import podcasts from './podcasts'
import type { ConfigPodcast, SimplecastPodcast, SimplecastEpisode, SimplecastEmbed } from '../types'

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
  getEpisode: async (showId: number, episodeId: number): Promise<SimplecastEpisode> => await fetchUrl(`podcasts/${showId}/episodes/${episodeId}.json`),
  getPlayer: async (showId: number, episodeId: number): Promise<SimplecastEmbed> => await fetchUrl(`podcasts/${showId}/episodes/${episodeId}/embed.json`),
  getConfigPodcastFromSlug: (slug: string): ?ConfigPodcast => podcasts.find(podcast => podcast && podcast.slug === slug),
  getConfigPodcastFromId: (id: number): ?ConfigPodcast => podcasts.find(podcast => podcast && podcast.simplecastId === id)
}

export default api