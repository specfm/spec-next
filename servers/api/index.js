// @flow
require('now-env')
const microCors = require('micro-cors')
const { send } = require('micro')
const fetch = require('node-fetch');
const cache = require('micro-cacheable')
const API_URL_ROOT = 'https://api.simplecast.com/v1'
const API_KEY = process.env.SIMPLECAST_API_KEY
const cors = microCors({
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://spec.fm'
      : 'http://localhost:3000',
  credentials: true,
})

const handler = async (req, res) => {
  const sendError = (code = 400, error = 'Invalid url') => send(res, code, { error })
  if (!req.url) return sendError()
  if (!req.url.startsWith('/podcasts')) return sendError()
  if (req.url.length === 0 || req.url === '/') return sendError()

  const response = await fetch(`${API_URL_ROOT}${req.url}`, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY
    }
  });
	const json = await response.json();
	return json;
};

const fn = cors(handler)
const result = process.env.NODE_ENV === 'production'
  ? cache(60 * 60 * 1000, fn)
  : fn

module.exports = result