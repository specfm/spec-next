import * as React from 'react'
import Page from '~/components/Page'
import SponsorGrid from '~/components/SponsorGrid'
import { PrimaryButton } from '~/components/Button'
import {
  Container,
  PostHeader,
  Title,
  Subtitle,
  Divider,
} from '~/components/Blog'
import {
  Grid,
  Section,
  Number,
  Label,
  ButtonContainer,
} from '~/components/SponsorsComponents'
import { NextSeo } from 'next-seo'

export default function Sponsors() {
  return (
    <Page showEmailCapture={false} dataCy="sponsors-view">
      <NextSeo
        title="Sponsors"
        description="Podcasts and resources to help designers and developers level uph"
        openGraph={{
          title: 'Sponsors',
          description:
            'Podcasts and resources to help designers and developers level uph',
        }}
      />

      <Container style={{ paddingTop: '88px' }}>
        <PostHeader>
          <Title>Sponsor Spec</Title>
          <Subtitle>
            If you’re hiring, launching a new product, managing an event, or
            doing anything else to help designers and developers level up, we’d
            love to help.
          </Subtitle>
        </PostHeader>
      </Container>

      <Grid>
        <Section>
          <Number>11</Number>
          <Label>Podcasts</Label>
        </Section>

        <Section>
          <Number>130,000+</Number>
          <Label>Weekly downloads</Label>
        </Section>

        <Section>
          <Number>25M+</Number>
          <Label>Total downloads</Label>
        </Section>
      </Grid>

      <Divider />

      <ButtonContainer>
        <a href="mailto:sponsors@spec.fm">
          <PrimaryButton size="large">Get in touch</PrimaryButton>
        </a>
      </ButtonContainer>

      <Divider />

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
