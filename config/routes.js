// @flow
const routes = require('next-routes')

module.exports = routes()
  .add('about')
  .add('sponsors')
  .add('podcasts', '/podcasts/:slug')
  .add('podcasts/', '/podcasts/:slug')