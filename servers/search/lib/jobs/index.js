// @flow
import { indexPodcastsInSearch } from '../bull/queues';

export const startCron = () => {
  const pattern =
    process.env.NODE_ENV === 'production' ? '30 5 1-31/2 * *' : '* * * * *';

  return indexPodcastsInSearch.add(
    {},
    {
      removeOnComplete: true,
      removeOnFail: true,
      attempts: 1,
      repeat: { cron: pattern, tz: 'America/Los_Angeles' },
    }
  );
};
