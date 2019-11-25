// @flow
export type SimplecastPodcast = {
  id: string,
  title: string,
  rss_url: string,
  description: ?string,
  author: string,
  copyright: string,
  keywords: string,
  subdomain: string,
  categories: Array<string>,
  itunes_url: string,
  language: string,
  website: ?string,
  twitter: ?string,
  explicit: boolean,
  images: {
    large: string,
    small: string,
    thumb: string,
  },
};

export type SimplecastEpisode = {
  id: string,
  number: number,
  podcast_id: string,
  guide: string,
  title: string,
  author: string,
  duration: number,
  explicit: false,
  published: true,
  description: string,
  long_description: string,
  published_at: string,
  audio_file_size: number,
  audio_url: string,
  sharing_url: string,
  images: {
    large: string,
    small: string,
    thumb: string,
  },
  sponsors: Array<?any>,
  error?: string,
};

export type Host = {
  name: string,
  twitterUsername: string,
  profilePhotoUrl: string,
};

export type ConfigPodcast = {|
  id: ?string,
  name: string,
  slug: string,
  description: string,
  simplecastId: ?string,
  artworkUrl: string,
  iTunesUrl: string,
  overcastUrl: string,
  pocketCastsUrl: string,
  rssFeedUrl: string,
  googlePodcastsUrl: string,
  castroUrl: string,
  breakerUrl: string,
  applePodcastId: string,
  twitterUsername: string,
  hosts: Array<Host>,
  featuredEpisodes: Array<?number>,
  colors: {
    text: string,
    button: string,
  },
|};

export type GetInitialProps = {
  pathname: string,
  query: any,
  req?: any,
  res?: any,
  jsonPageRes?: any,
  err?: any,
};

export type SearchResult = {
  podcastId: string,
  title: string,
  id: string,
  publishedAt: string,
};

export type SearchableEpisode = {
  podcastId: string,
  title: string,
  description: string,
  publishedAt: string,
  id: string,
  objectID: string,
}