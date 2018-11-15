// @flow
import Redis from 'ioredis';

require('now-env');

const config =
  process.env.NODE_ENV === 'production'
    ? {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
      }
    : undefined; // Use the local instance of Redis in development by not passing any connection string

export default (extraConfig?: Object) =>
  new Redis({
    ...config,
    ...extraConfig,
  });
