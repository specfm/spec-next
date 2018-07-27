// @flow
export type SimplecastPodcast = {
  id: number,
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
  }
}

export type SimplecastEpisode = {
  id: number,
  number: number,
  podcast_id: number,
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
    thumb: string
  },
  sponsors: Array<?any>
}

export type SearchableEpisode = {
  podcastId: number,
  title: string,
  description: string,
  publishedAt: string,
  id: number,
  objectID: number,
}