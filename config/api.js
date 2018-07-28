// @flow
import "isomorphic-unfetch";
import podcasts from './podcasts'
import type { ConfigPodcast, SimplecastPodcast, SimplecastEpisode, JobListing } from '../types'

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

const SEEKER_URL = 'https://api.seeker.company/v1'
const SEEKER_API_KEY = '384a0a09-1bae-4d94-8cfd-d01b6b1c72a3'

const fetchJobs = async (): Promise<Array<?JobListing>> => {
  try {
    const req = fetch(`${SEEKER_URL}/jobs`, {
      headers: {
        'Authorization': `Token ${SEEKER_API_KEY}`
      }
    });
    const res = await req;
    const json = await res.json();
    console.log({ json })
    return json.results;
  } catch (err) {
    return Promise.resolve([])
  }
}

const api = {
  getPodcasts: async (): Promise<?Array<?SimplecastPodcast>> => await fetchUrl('podcasts.json'),
  getPodcast: async (id: ?number): Promise<?SimplecastPodcast> => id ? await fetchUrl(`podcasts/${id}.json`) : null,
  getEpisodes: async (id: ?number): Promise<?Array<?SimplecastEpisode>> => id ? await fetchUrl(`podcasts/${id}/episodes.json`) : [],
  getEpisode: async (showId: ?number, episodeId: number): Promise<?SimplecastEpisode> => showId ? await fetchUrl(`podcasts/${showId}/episodes/${episodeId}.json`) : null,
  getConfigPodcastFromSlug: (slug: string): ?ConfigPodcast => podcasts.find(podcast => podcast && podcast.slug === slug),
  getConfigPodcastFromId: (id: number): ?ConfigPodcast => podcasts.find(podcast => podcast && podcast.simplecastId && podcast.simplecastId === id),
  getJobs: async(): Promise<Array<?JobListing>> => await fetchJobs()
}

export default api