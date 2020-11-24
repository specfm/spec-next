import fetch from 'isomorphic-unfetch'
import { podcasts } from '~/config'
import { ConfigPodcast, SimplecastPodcast, SimplecastEpisode } from '~/types'

const API_URL_ROOT = 'https://api.simplecast.com'
const API_KEY = process.env.SIMPLECAST_V2_API_KEY

function transformPodcast(rawPodcast): SimplecastPodcast {
  return {
    description: rawPodcast.description || '',
    title: rawPodcast.title,
    id: rawPodcast.id,
  }
}

function transformEpisode(rawEpisode): SimplecastEpisode {
  return {
    description: rawEpisode.description || null,
    id: rawEpisode.id,
    legacy_id: rawEpisode.legacy_id || null,
    long_description: rawEpisode.long_description || null,
    published_at: rawEpisode.published_at,
    status: rawEpisode.status,
    title: rawEpisode.title,
    token: rawEpisode.token,
  }
}

async function simplecast(url, opts = {}) {
  const response = await fetch(`${API_URL_ROOT}${url}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    ...opts,
  })

  return await response.json()
}

export async function getEpisodes({
  showId,
  limit = 10,
  offset = 0,
}): Promise<SimplecastEpisode[]> {
  return await simplecast(
    `/podcasts/${showId}/episodes?limit=${limit}&offset=${offset}&sort=published_at_desc`
  )
    .then((res) => {
      if (!res || !res.collection) {
        console.log({ res })
        return []
      } else {
        return res.collection.filter((ep) => ep.status === 'published')
      }
    })
    .then((res) => res.map(transformEpisode))
    .catch((err) => {
      console.error({ err, showId })
      return []
    })
}

export async function getEpisode(id): Promise<SimplecastEpisode> {
  if (!id) return null
  return await simplecast(`/episodes/search?token=${id}`, { method: 'POST' })
    .then((res) => {
      if (res.error) return null
      return transformEpisode(res)
    })
    .catch((err) => {
      console.error({ err, episodeId: id })
      return null
    })
}

export async function getPodcasts(): Promise<SimplecastPodcast[]> {
  return await simplecast(`/podcasts`)
    .then((res) => res.collection.map(transformPodcast))
    .catch((err) => {
      console.error({ err })
      return []
    })
}

export async function getPodcast(id): Promise<SimplecastPodcast> {
  if (!id) return null
  return await simplecast(`/podcasts/${id}`)
    .then((res) => {
      if (res.error) return null
      return transformPodcast(res)
    })
    .catch((err) => {
      console.error({ err })
      return null
    })
}

export function getConfigPodcastFromId(id: string): ConfigPodcast {
  if (!id) return null
  return podcasts.find(
    (podcast) => podcast && podcast.simplecastId && podcast.simplecastId === id
  )
}

export function getConfigPodcastFromSlug(slug: string): ConfigPodcast {
  return podcasts.find((podcast) => podcast && podcast.slug === slug)
}
