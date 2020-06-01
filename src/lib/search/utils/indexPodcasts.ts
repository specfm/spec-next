import indexPodcastInSearch from './indexPodcast'
import { getPodcasts } from '~/lib/simplecast'

export default async function indexPodcasts() {
  const podcasts = await getPodcasts()
  const ids = podcasts.map((podcast) => podcast.id)
  const indexPodcastPromises = ids.map((id) => indexPodcastInSearch(id))

  return Promise.all(indexPodcastPromises)
}
