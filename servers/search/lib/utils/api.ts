import 'isomorphic-unfetch';

const prod = process.env.NODE_ENV === 'production';

const API_URL = prod ? 'https://spec.fm/api' : 'http://localhost:3000/api';

const fetchUrl = async (url) => {
  const req = fetch(`${API_URL}/${url}`);
  const res = await req;
  const json = await res.json();
  return json;
};

const api = {
  getPodcasts: async () =>
    fetchUrl('podcasts'),
  getPodcast: async (id) =>
    fetchUrl(`podcasts/${id}`),
  getEpisodes: async (id) =>
    fetchUrl(`podcasts/${id}/episodes`),
};

export default api;
