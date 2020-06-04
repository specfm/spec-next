import * as React from 'react'
import Page from '~/components/Page'
import { ConfigPodcast, SimplecastEpisode } from '~/types'
import PodcastView from '~/components/PodcastView'
import { getConfigPodcastFromSlug, getEpisodes } from '~/lib/simplecast'
import { podcasts } from '~/config'
import { useRouter } from 'next/router'
import FullscreenLoading from '~/components/FullscreenLoading'

interface Props {
  configPodcast: ConfigPodcast
  episodes: SimplecastEpisode[]
}

export default function PodcastPage(props: Props) {
  const { configPodcast, episodes } = props
  const router = useRouter()

  React.useEffect(() => {
    if (!router.isFallback && (!configPodcast || !episodes)) router.push('/')
  }, [router.isFallback])

  if (router.isFallback) {
    return <FullscreenLoading />
  }

  if (configPodcast && episodes) {
    return (
      <Page>
        <PodcastView podcast={configPodcast} episodes={episodes} />
      </Page>
    )
  }

  return null
}

export async function getStaticPaths() {
  const dontIndex = ['design-details', 'layout']
  const paths = podcasts
    .filter((p) => dontIndex.indexOf(p.slug) < 0)
    .map(({ slug }) => ({
      params: { slug },
    }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  const dontIndex = ['design-details', 'layout']

  if (dontIndex.indexOf(slug) >= 0) {
    return {
      props: {
        configPodcast: null,
        episodes: null,
      },
    }
  }

  const configPodcast = getConfigPodcastFromSlug(slug)

  if (!configPodcast) {
    return {
      props: {
        configPodcast: null,
        episodes: null,
      },
    }
  }

  const episodes = await getEpisodes({
    showId: configPodcast.simplecastId,
    limit: 2000,
    offset: 0,
  })

  return {
    unstable_revalidate: 60 * 60,
    props: {
      configPodcast,
      episodes,
    },
  }
}
