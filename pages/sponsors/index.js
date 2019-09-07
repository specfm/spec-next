// @flow
import * as React from 'react';
import Head from 'next/head';
import Page from '../../components/Page';
import SponsorGrid from '../../components/SponsorGrid';
import { PrimaryButton } from '../../components/Button';
import {
  Container,
  PostHeader,
  Title,
  Subtitle,
  Divider,
} from '../../components/Blog';
import { Grid, Section, Number, Label, ButtonContainer } from '../../components/SponsorsComponents';

export default class Sponsors extends React.Component<{}> {
  render() {
    return (
      <Page showEmailCapture={false} dataCy="sponsors-view">
        <Head>
          <title>Spec · Sponsors</title>
          <meta content="Spec · Sponsors" name="og:title" key="og:title" />
          <meta
            content="If you’re hiring, launching a new product, managing an event, or doing anything else to help designers and developers level up, we’d love to help"
            name="og:description"
            key="og:description"
          />
          <meta
            content="Spec · Sponsors"
            name="twitter:title"
            key="twitter:title"
          />
        </Head>

        <Container style={{ paddingTop: '88px' }}>
          <PostHeader>
            <Title>Sponsor Spec</Title>
            <Subtitle>
              If you’re hiring, launching a new product, managing an event, or
              doing anything else to help designers and developers level up,
              we’d love to help.
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
              Our sponsors make it possible to create all of the content
              produced on the Spec Network.
            </Subtitle>
          </PostHeader>
        </Container>

        <SponsorGrid />
      </Page>
    );
  }
}
