import removeMd from 'remove-markdown'
import { byteCount, withoutStopWords } from './text-parsing'
import { SimplecastEpisode } from '~/types'

export default (episode: SimplecastEpisode, showId: string) => {
  let description = episode.long_description
    ? withoutStopWords(episode.long_description)
    : episode.description
      ? episode.description
      : ''
  const title = episode.title

  // algolia only supports 20kb records
  // slice it down until its under 19k, leaving room for the rest of the episode
  while (byteCount(description) >= 19000) {
    description = description.slice(0, -100)
  }

  // remove markdown from description for better indexing
  description = removeMd(description)

  return {
    podcastId: showId,
    title,
    description,
    publishedAt: episode.published_at,
    id: episode.legacy_id || episode.token,
    objectID: episode.legacy_id || episode.token,
  }
}
