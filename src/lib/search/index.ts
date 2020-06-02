import indexPodcasts from '~/lib/search/utils/indexPodcasts'
import { NextApiRequest, NextApiResponse } from 'next'
import { sentryAPIHandler } from '../sentry'

export default sentryAPIHandler(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { token: reqToken } = req.query
    const token = process.env.SEARCH_INDEXING_TOKEN

    if (!token || !reqToken || token !== reqToken) {
      return res.status(500).json({ error: 'Invalid token' })
    }

    await indexPodcasts()
    return res.status(200).json({ status: 'Indexing complete!' })
  }
)
