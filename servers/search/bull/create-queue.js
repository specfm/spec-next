// @flow
import Queue from 'bull'
import createRedis from './create-redis';

const client = createRedis();
const subscriber = createRedis();

function createQueue(name: string, queueOptions: ?Object) {
  const queue = new Queue(name, {
    createClient: function(type) {
      switch (type) {
        case 'client':
          return client;
        case 'subscriber':
          return subscriber;
        default:
          return createRedis();
      }
    },
    defaultJobOptions: {
      removeOnComplete: true,
      attempts: 1,
    },
    ...queueOptions,
  });
  
  queue.on('stalled', () => {
    return
  });

  queue.on('failed', () => {
    return
  });

  return queue;
}

module.exports = { createQueue }