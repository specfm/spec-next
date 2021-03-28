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
  slug: string
}

export default function PodcastPage(props: Props) {
  const { configPodcast, episodes } = props
  const router = useRouter()

  if (router.isFallback) {
    return <FullscreenLoading />
  }

  React.useEffect(() => {
    if (props.slug === 'design-details') {
      window.location.href = `https://designdetails.fm/episodes/`
    }

    else if (props.slug === 'swift-unwrapped') {
      window.location.href = `https://swiftunwrapped.github.io/`
    }

    else if (!configPodcast || !episodes) { router.push('/') }
  }, [router.isFallback])

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
  const dontIndex = ['swift-unwrapped', 'design-details', 'layout']
  const paths = podcasts
    .filter((p) => dontIndex.indexOf(p.slug) < 0)
    .map(({ slug }) => ({
      params: { slug },
    }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  const dontIndex = ['swift-unwrapped', 'design-details', 'layout']

  if (dontIndex.indexOf(slug) >= 0) {
    return {
      props: {
        configPodcast: null,
        episodes: null,
        slug,
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
    revalidate: 60 * 60,
    props: {
      configPodcast,
      episodes,
    },
  }
}
