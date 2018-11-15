// @flow
const routes = require('next-routes');

module.exports = routes()
  .add('about')
  .add('sponsors')
  .add('podcasts', '/podcasts')
  .add('podcast', '/podcasts/:slug')
  .add('episode', '/podcasts/:slug/:episodeId');
