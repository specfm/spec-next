// @flow
import * as React from 'react'
import { api } from '../../../config'
import type { ConfigPodcast, SearchResult } from '../../../types'
import { Link as RouteLink } from '../../../config/routes'
import { getDateObject } from '../../../lib/getDateObject'
import { SearchEpisodeContainer, Artwork, Meta, Title, Timestamp } from './style'
import SearchContext from './SearchContext'

type Episode = {
  id: number,
  publishedAt: string,
  title: string,
}

type Props = {
  podcast: ConfigPodcast,
  episode: Episode,
  hit: SearchResult
}

class SearchEpisode extends React.Component<Props> {
  render() {
    const { hit } = this.props
    const episode = hit

    if (!hit) return null
    
    const podcast = api.getConfigPodcastFromId(hit.podcastId)    

    if (!podcast) return null

    const { month, year, day } = getDateObject(episode.publishedAt)
    const datestring = `${month} ${day}, ${year}`
    
    return (
      <SearchContext.Consumer>
        {({ clear }) => (
          <RouteLink route='episode' params={{ slug: podcast.slug, episodeId: episode.id }}>
            <a>
              <SearchEpisodeContainer onClick={clear}>
                <Artwork src={podcast.artworkUrl} alt={podcast.name} />
                <Meta>
                  <Title>{episode.title}</Title>
                  <Timestamp>{datestring}</Timestamp>
                </Meta>
              </SearchEpisodeContainer>
            </a>
          </RouteLink>
        )}
      </SearchContext.Consumer>
    )
  }
}

export default SearchEpisode