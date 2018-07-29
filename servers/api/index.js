// @flow
require('now-env')
const microCors = require('micro-cors')
const { send } = require('micro')
const cache = require('micro-cacheable')
const cors = microCors()
const getStats = require('./getStats')
const simplecast = require('./simplecast')

const handler = async (req, res) => {
  const sendError = (code = 400, error = 'Invalid url') => send(res, code, { error })
  if (!req.url) return sendError()
  if (req.url.length === 0 || req.url === '/') return sendError()

  if (req.url.startsWith('/stats')) {
    return await getStats(req.url)
  }

  if (!req.url.startsWith('/podcasts')) return sendError()

  return await simplecast(req.url)
};

const result = process.env.NODE_ENV === 'production'
  ? cache(60 * 60 * 1000, handler)
  : handler

module.exports = cors(result)