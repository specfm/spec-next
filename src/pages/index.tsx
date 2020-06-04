import * as React from 'react'
import Page, { SectionHeading, Heading, Subheading } from '~/components/Page'
import { ConfigPodcast } from '~/types'
import PodcastGrid from '~/components/PodcastsGrid'
import ResourcesGrid from '~/components/ResourcesGrid'
import { podcasts as configPodcasts } from '~/config'

interface Props {
  podcasts: ConfigPodcast[]
}

export default function Home({ podcasts }: Props) {
  return (
    <Page dataCy="home-view">
      <SectionHeading>
        <Heading>Podcasts</Heading>
        <Subheading>
          Level up by listening to podcasts from the best in the industry
        </Subheading>
      </SectionHeading>

      {podcasts && <PodcastGrid podcasts={podcasts} />}

      <SectionHeading>
        <Heading>Resources</Heading>
        <Subheading>Curated resources for designers and developers</Subheading>
      </SectionHeading>

      <ResourcesGrid />
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
    unstable_revalidate: 60 * 60,
    props: {
      podcasts: [...active, ...inactive],
    },
  }
}
