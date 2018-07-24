// @flow
import "isomorphic-unfetch";
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
  getPodcasts: async () => await fetchUrl('podcasts.json'),
  getPodcast: async (id: number) => await fetchUrl(`podcasts/${id}.json`),
  getEpisodes: async (id: number) => await fetchUrl(`podcasts/${id}/episodes.json`),
  getEpisode: async (showId: number, episodeId: number) => await fetchUrl(`podcasts/${showId}/episodes/${episodeId}.json`),
  getPlayer: async (showId: number, episodeId: number) => await fetchUrl(`podcasts/${showId}/episodes/${episodeId}/embed.json`),
}

export default api