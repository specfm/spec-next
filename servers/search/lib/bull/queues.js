// @flow
const { createQueue } = require('./create-queue.js');
import type { Queues } from './types'
const EventEmitter = require('events');
import {
  INDEX_PODCASTS_IN_SEARCH,
  INDEX_PODCAST_IN_SEARCH,
  INDEX_EPISODE_IN_SEARCH,
} from '../queues/constants';

exports.QUEUE_NAMES = {
  indexPodcastsInSearch: INDEX_PODCASTS_IN_SEARCH,
  indexPodcastInSearch: INDEX_PODCAST_IN_SEARCH,
  indexEpisodeInSearch: INDEX_EPISODE_IN_SEARCH,
};

// $FlowIssue
EventEmitter.defaultMaxListeners =
  // $FlowIssue
  Object.keys(exports.QUEUE_NAMES).length + EventEmitter.defaultMaxListeners;

// Create all the queues, export an object with all the queues
const queues: Queues = Object.keys(exports.QUEUE_NAMES).reduce(
  (queues, name) => {
    queues[name] = createQueue(exports.QUEUE_NAMES[name]);
    return queues;
  },
  {}
);

module.exports = queues;
