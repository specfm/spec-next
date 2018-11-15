// @flow
import Queue from 'bull';
import createRedis from './create-redis';

const client = createRedis();
const subscriber = createRedis();

function createQueue(name: string, queueOptions: ?Object) {
  const queue = new Queue(name, {
    createClient(type) {
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
    console.error('Job stalled');
  });

  queue.on('failed', () => {
    console.error('Job failed');
  });

  return queue;
}

module.exports = { createQueue };
