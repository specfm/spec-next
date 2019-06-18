const fetch = require("node-fetch");

const API_URL_ROOT = "https://api.simplecast.com";
const API_KEY = process.env.SIMPLECAST_API_KEY;

const simplecast = async url => {
  const response = await fetch(`${API_URL_ROOT}${url}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${API_KEY}`,
      "X-API-KEY": API_KEY
    }
  });
  const json = await response.json();
  return json;
};

module.exports = simplecast;
