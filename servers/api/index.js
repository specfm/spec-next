// @flow
require('now-env')
const microCors = require('micro-cors')
const fetch = require('node-fetch');
const API_URL_ROOT = 'https://api.simplecast.com/v1'
const API_KEY = process.env.SIMPLECAST_API_KEY
const cors = microCors()

const handler = async (req) => {
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