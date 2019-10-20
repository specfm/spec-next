import fetch from 'isomorphic-unfetch'

const API_URL_ROOT = 'https://api.simplecast.com/v1';
const API_KEY = process.env.SIMPLECAST_API_KEY;

export default async url => {
  const response = await fetch(`${API_URL_ROOT}${url}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
    },
  });

  return await response.json();
};