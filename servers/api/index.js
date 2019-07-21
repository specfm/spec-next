// @flow
require("now-env");
const microCors = require("micro-cors");
const { send } = require("micro");
const cache = require("micro-cacheable");

const cors = microCors();
const getStats = require("./getStats");
const simplecast = require("./simplecast");
const getJobs = require("./jobs");

const handler = async (req, res) => {
  const sendError = (code = 400, error = "Invalid url") =>
    send(res, code, { error });

  if (!req.url) return sendError();
  if (req.url.length === 0 || req.url === "/") return sendError();

  if (req.url.startsWith("/jobs")) {
    return getJobs();
  }

  if (req.url.startsWith("/stats")) {
    return getStats(req.url);
  }

  if (!req.url.startsWith("/podcasts") && !req.url.startsWith("/episodes"))
    return sendError();

  return simplecast(req.url);
};

const result =
  process.env.NODE_ENV === "production"
    ? cache(60 * 60 * 1000, handler)
    : handler;

module.exports = cors(result);
