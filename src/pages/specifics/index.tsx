import * as React from 'react'
import Page, {
  SectionHeading,
  Heading,
  Subheading,
} from '../../components/Page'
import SpecificsGrid from '../../components/SpecificsGrid'
import { NextSeo } from 'next-seo'

export default function Specifics() {
  return (
    <Page dataCy="specifics-view">
      <NextSeo
        title="Specifics"
        description="Reference guides for designers and developers"
        openGraph={{
          title: 'Specifics',
          description: 'Reference guides for designers and developers',
          images: [
            {
              url: '/static/img/specifics/001-header.png',
              alt: 'Specifics',
            },
          ],
        }}
      />

      <SectionHeading>
        <Heading>Specifics</Heading>
        <Subheading>Reference guides for designers and developers</Subheading>
      </SectionHeading>

      <SpecificsGrid />
    </Page>
  )
}
