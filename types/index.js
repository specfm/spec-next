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
    thumb: string
  }
};

export type SimplecastEpisode = {
  id: string,
  number: number,
  podcast_id: number,
  guide: string,
  title: string,
  author: string,
  duration: number,
  explicit: false,
  is_published: true,
  description: string,
  long_description: string,
  published_at: string,
  audio_file_size: number,
  audio_url: string,
  sharing_url: string,
  images: {
    large: string,
    small: string,
    thumb: string
  },
  sponsors: Array<?any>,
  error?: string
};

export type Host = {
  name: string,
  twitterUsername: string,
  profilePhotoUrl: string
};

export type ConfigPodcast = {|
  id: ?number,
  name: string,
  slug: string,
  description: string,
  simplecastId: ?number,
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
    button: string
  }
|};

export type GetInitialProps = {
  pathname: string,
  query: any,
  req?: any,
  res?: any,
  jsonPageRes?: any,
  err?: any
};

export type SearchResult = {
  podcastId: number,
  title: string,
  id: number,
  publishedAt: string
};

export type JobListing = {
  id: string,
  job_title: string,
  job_description: string,
  job_location: string,
  job_application_link: string,
  creation_date: string,
  end_date: string,
  job_link: string,
  company: {
    name: string,
    company_url: string
  }
};
