import indexPodcasts from '../lib/indexPodcasts'

export default async (req, res) => {
  await indexPodcasts()
  res.end('Indexing complete 🌱')
}