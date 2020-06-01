import * as React from 'react'
import Page from '~/components/Page'
import { ConfigPodcast, SimplecastEpisode } from '~/types'
import EpisodeView from '~/components/EpisodeView'
import { getConfigPodcastFromSlug, getEpisode } from '~/lib/simplecast'
import { useRouter } from 'next/router'
import FullscreenLoading from '~/components/FullscreenLoading'

interface Props {
  configPodcast: ConfigPodcast
  episode: SimplecastEpisode
}

export default function EpisodePage(props: Props) {
  const { configPodcast, episode } = props
  const router = useRouter()

  if (router.isFallback) {
    return <FullscreenLoading />
  }

  return (
    <Page>
      <EpisodeView podcast={configPodcast} episode={episode} />
    </Page>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const { slug, episodeId } = params

  if (slug === 'design-details') {
    return {
      props: {
        episode: null,
        configPodcast: null,
      },
    }
  }

  const configPodcast = getConfigPodcastFromSlug(slug)

  if (!configPodcast || !episodeId || episodeId === 'undefined') {
    return {
      props: {
        episode: null,
        configPodcast: null,
      },
    }
  }

  const episode = await getEpisode(episodeId)

  return {
    unstable_revalidate: 60 * 60,
    props: {
      episode,
      configPodcast,
    },
  }
}
