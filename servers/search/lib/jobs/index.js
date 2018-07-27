// @flow
import { indexPodcastsInSearch } from '../bull/queues'

export const startCron = () => {
  const pattern = process.env.NODE_ENV === 'production'
    ? '0 18 * * *'
    : '* * * * *'

  return indexPodcastsInSearch.add(
    {},
    {
      removeOnComplete: true,
      removeOnFail: true,
      attempts: 1,
      repeat: { cron: pattern, tz: 'America/Los_Angeles' },
    }
  )
}