import * as React from 'react'
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page'
import { ConfigPodcast } from '~/types'
import PodcastGrid from '~/components/PodcastsGrid'
import { podcasts as configPodcasts } from '~/config'

interface Props {
  podcasts: ConfigPodcast[]
}

export default function PodcastsPage({ podcasts }: Props) {
  return (
    <Page dataCy="podcasts-view">
      <SectionHeading>
        <Heading>Podcasts</Heading>
        <Subheading>
          Level up by listening to podcasts from the best in the industry
        </Subheading>
      </SectionHeading>

      {podcasts && <PodcastGrid podcasts={podcasts} />}
    </Page>
  )
}

export async function getStaticProps() {
  const activeSlugs = [
    'developer-tea',
    'design-details',
    'framework',
    'reactpodcast',
    'does-not-compute',
    'fragmented',
    'swift-unwrapped',
    'layout',
    'toolsday',
  ]

  const inactiveSlugs = ['immutable', 'vicarious', 'runtime', 'orthogonal']

  const active = configPodcasts.filter((p) => activeSlugs.indexOf(p.slug) >= 0)
  const inactive = configPodcasts.filter(
    (p) => inactiveSlugs.indexOf(p.slug) >= 0
  )

  return {
    props: {
      podcasts: [...active, ...inactive],
    },
  }
}
