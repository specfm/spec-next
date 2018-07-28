// @flow
import { api, podcasts as config } from '../config'
import type { SimplecastPodcast, ConfigPodcast } from '../types'

export default (array: ?Array<?SimplecastPodcast>): Array<?ConfigPodcast> => {
  let podcasts = []
  
  const layout = config.find(podcast => podcast && podcast.slug === 'layout')

  if (array && array.length > 0) {
    const sc = array
    // given the results, sort the podcasts by activity
    const sorted = [363, 1034, 1386, 1684, 2128, 2693, 4211, 1332, 1457, 2070]
      .map(id => sc.find(podcast => podcast && podcast.id === id))
      // and then replace the array with our configuration data to populate
      // the cards
      .map(podcast => podcast && api.getConfigPodcastFromId(podcast.id))
    
    podcasts = [ ...sorted, layout ]
  }

  return podcasts;
}