export type Maybe<T> = T | null

export interface SimplecastPodcast {
  title: string
  description: string
  id: string
}

export interface SimplecastEpisode {
  id: string
  description: string
  legacy_id: Maybe<string>
  long_description: string
  published_at: string
  status: string
  title: string
  token: string
}

export interface Host {
  name: string
  twitterUsername: string
  profilePhotoUrl: string
}

export interface ConfigPodcast {
  id: string
  name: string
  slug: string
  description: string
  simplecastId: string
  artworkUrl: string
  iTunesUrl: string
  overcastUrl: string
  pocketCastsUrl: string
  rssFeedUrl: string
  googlePodcastsUrl: string
  castroUrl: string
  breakerUrl: string
  applePodcastId: string
  twitterUsername: string
  hosts: Array<Host>
  featuredEpisodes: Array<number>
  websiteUrl?: string
  colors: {
    text: string
    button: string
  }
}

export interface GetInitialProps {
  pathname: string
  query: any
  req?: any
  res?: any
  jsonPageRes?: any
  err?: any
}

export interface SearchResult {
  podcastId: string
  title: string
  id: string
  publishedAt: string
}

export interface SearchableEpisode {
  podcastId: string
  title: string
  description: string
  publishedAt: string
  id: string
  objectID: number
}
