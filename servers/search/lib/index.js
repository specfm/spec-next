// @flow
import 'babel-polyfill';
import createWorker from './bull/create-worker';
import processIndexPodcasts from './queues/indexPodcasts';
import processIndexPodcast from './queues/indexPodcast';
import processIndexEpisode from './queues/indexEpisode';
import {
  INDEX_PODCAST_IN_SEARCH,
  INDEX_PODCASTS_IN_SEARCH,
  INDEX_EPISODE_IN_SEARCH,
} from './queues/constants';
import { startCron } from './jobs';

const debug = require('debug')('search');

const PORT = parseInt(process.env.PORT, 10) || 3002;
debug('Search server is starting...');
debug('');

const server = createWorker(
  {
    [INDEX_PODCAST_IN_SEARCH]: processIndexPodcast,
    [INDEX_PODCASTS_IN_SEARCH]: processIndexPodcasts,
    [INDEX_EPISODE_IN_SEARCH]: processIndexEpisode,
  },
  {
    settings: {
      lockDuration: 600000, // Key expiration time for job locks.
      stalledInterval: 0, // How often check for stalled jobs (use 0 for never checking).
      maxStalledCount: 0, // Max amount of times a stalled job will be re-processed.
    },
  }
);

startCron();

server.listen(PORT, 'localhost', 511, () => {
  debug(
    `💉 Healthcheck server running at ${server.address().address}:${
      server.address().port
    }`
  );
});
