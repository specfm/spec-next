// @flow
import "isomorphic-unfetch";
import podcasts from "./podcasts";
import type {
  ConfigPodcast,
  SimplecastPodcast,
  SimplecastEpisode,
  JobListing
} from "../types";

const prod = process.env.NODE_ENV === "production";

const API_URL = prod ? "https://api.spec.fm" : "http://localhost:3001";

const fetchUrl = async (url: string): any => {
  try {
    const req = fetch(`${API_URL}/${url}`);
    const res = await req;
    const json = await res.json();
    return json;
  } catch (err) {
    return Promise.resolve();
  }
};

const api = {
  getPodcast: async (id: ?number): Promise<?SimplecastPodcast> =>
    id ? fetchUrl(`podcasts/${id}`) : null,
  getEpisodes: async (id: ?number): Promise<?Array<?SimplecastEpisode>> =>
    id ? fetchUrl(`podcasts/${id}/episodes`) : [],
  getEpisode: async (
    showId: ?number,
    episodeId: number
  ): Promise<?SimplecastEpisode> =>
    showId ? fetchUrl(`podcasts/${showId}/episodes/${episodeId}`) : null,
  getConfigPodcastFromSlug: (slug: string): ?ConfigPodcast =>
    podcasts.find(podcast => podcast && podcast.slug === slug),
  getConfigPodcastFromId: (id: number): ?ConfigPodcast =>
    podcasts.find(
      podcast => podcast && podcast.simplecastId && podcast.simplecastId === id
    ),
  getJobs: async (): Promise<Array<?JobListing>> => fetchUrl("jobs"),
  getStats: async (range: string): Promise<any> => fetchUrl(`stats/${range}`)
};

export default api;
