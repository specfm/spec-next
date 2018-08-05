// @flow
import { podcasts as config } from '../config'
import type { ConfigPodcast } from '../types'

export default (array: Array<ConfigPodcast>) => {
  let podcasts = array
  
  const layout = config.find(podcast => podcast && podcast.slug === 'layout')

  if (array && array.length > 0) {
    const sc = array
    const sorted = [363, 1034, 1386, 1684, 2128, 2693, 4211, 1332, 1457, 2070]
      .map(id => sc.find(podcast => podcast && podcast.id === id))
    
    podcasts = [ ...sorted, layout ]
  }

  return podcasts;
}