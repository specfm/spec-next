// @flow
import type { Queues } from './types';
import {
  INDEX_PODCASTS_IN_SEARCH,
  INDEX_PODCAST_IN_SEARCH,
  INDEX_EPISODE_IN_SEARCH,
} from '../queues/constants';

const EventEmitter = require('events');
const { createQueue } = require('./create-queue.js');

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
  (queuesArray, name) => {
    queuesArray[name] = createQueue(exports.QUEUE_NAMES[name]);
    return queuesArray;
  },
  {}
);

module.exports = queues;
