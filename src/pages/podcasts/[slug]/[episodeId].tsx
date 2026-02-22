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

  React.useEffect(() => {
    if (configPodcast && configPodcast.slug === 'design-details') {
      window.location.href = `https://designdetails.fm/episodes/${episode.legacy_id || episode.token
        }`
    }


    if (configPodcast && configPodcast.slug === 'swift-unwrapped') {
      window.location.href = `https://swiftunwrapped.github.io/episodes/${episode.legacy_id || episode.token
        }`
    }

  }, [configPodcast])

  if (configPodcast.slug === 'design-details' || configPodcast.slug === 'swift-unwrapped') {
    return (
      <Page>
        <FullscreenLoading />
      </Page>
    )
  }

  return (
    <Page>
      <EpisodeView podcast={configPodcast} episode={episode} />
    </Page>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug, episodeId } = params

  const configPodcast = getConfigPodcastFromSlug(slug)
  const episode = await getEpisode(episodeId)

  return {
    props: {
      episode,
      configPodcast,
    },
  }
}
