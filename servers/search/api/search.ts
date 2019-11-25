import indexPodcasts from '../lib/indexPodcasts'

export default async (req, res) => {
  return await indexPodcasts()
}