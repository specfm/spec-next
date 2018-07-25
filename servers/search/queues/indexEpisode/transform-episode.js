// @flow
import removeMd from 'remove-markdown'
import { byteCount, withoutStopWords } from '../../utils/text-parsing'
import type { SimplecastEpisode, SearchableEpisode } from '../../types'

export default (episode: SimplecastEpisode): SearchableEpisode => {
  let description = withoutStopWords(episode.long_description);
  const title = withoutStopWords(episode.title);

  // algolia only supports 20kb records
  // slice it down until its under 19k, leaving room for the rest of the episode
  while (byteCount(description) >= 19000) {
    description = description.slice(0, -100);
  }

  // remove markdown from description for better indexing
  description = removeMd(description)

  return {
    podcastId: episode.podcast_id,
    title,
    description,
    publishedAt: episode.published_at,
    id: episode.id,
    objectID: episode.id,
  };
};