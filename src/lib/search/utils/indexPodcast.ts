import initIndex from './algolia'
import { getEpisodes } from '~/lib/simplecast'
import transformEpisode from './transform-episode'

const searchIndex = initIndex('episodes')

export default async function indexPodcast(showId) {
  const episodes = await getEpisodes({ showId, limit: 1000, offset: 0 })
  const cleanEpisodes = episodes.map((episode) =>
    transformEpisode(episode, showId)
  )
  return await searchIndex.saveObjects(cleanEpisodes)
}
