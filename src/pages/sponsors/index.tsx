import * as React from 'react'
import Page from '~/components/Page'
import SponsorGrid from '~/components/SponsorGrid'
import {
  Container,
  PostHeader,
  Title,
  Subtitle,
  Divider,
} from '~/components/Blog'
import { NextSeo } from 'next-seo'

export default function Sponsors() {
  return (
    <Page dataCy="sponsors-view">
      <NextSeo
        title="Sponsors"
        description="Podcasts and resources to help designers and developers level uph"
        openGraph={{
          title: 'Sponsors',
          description:
            'Podcasts and resources to help designers and developers level uph',
        }}
      />

      <Divider style={{ paddingTop: '88px' }} />

      <Container>
        <PostHeader>
          <Title>Our Sponsors</Title>
          <Subtitle>
            Our sponsors make it possible to create all of the content produced
            on the Spec Network.
          </Subtitle>
        </PostHeader>
      </Container>

      <SponsorGrid />
    </Page>
  )
}
