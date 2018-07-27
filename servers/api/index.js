// @flow
require('now-env')
const microCors = require('micro-cors')
const { send } = require('micro')
const fetch = require('node-fetch');
const API_URL_ROOT = 'https://api.simplecast.com/v1'
const API_KEY = process.env.SIMPLECAST_API_KEY
const cors = microCors({
  origin:
    process.env.NODE_ENV === 'production'
      ? [
          'https://spec.fm',
          /specfm-next-(\w|-)+\.now\.sh/g,
          /spec\.fm$/,
        ]
      : 'http://localhost:3000',
  credentials: true,
})

const handler = async (req, res) => {
  if (!req.url) return send(res, 400, { error: 'Invalid url'})
  if (!req.url.startsWith('/podcasts')) return send(res, 400, { error: 'Invalid url'})

  const response = await fetch(`${API_URL_ROOT}${req.url}`, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY
    }
  });
	const json = await response.json();
	return json;
};

module.exports = cors(handler)