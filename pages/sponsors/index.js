// @flow
import * as React from 'react'
import Head from 'next/head'
import Page from '../../components/Page'
import SponsorGrid from '../../components/SponsorGrid'
import { Container, PostHeader, Title, Subtitle } from '../../components/Blog'

export default class Sponsors extends React.Component<{}> {
  render() {
    return (
      <Page showEmailCapture={false}>

        <Head>
          <title>Spec · Sponsors</title>
          <meta content={"Spec · Sponsors"} name="og:title" />
          <meta content={"If you’re hiring, launching a new product, managing an event, or doing anything else to help designers and developers level up, we’d love to help"} name="og:description" />
          <meta content={"Spec · Sponsors"} name="twitter:title" />
        </Head>

        <Container style={{paddingTop: '88px'}}>
          <PostHeader>
            <Title>Sponsor Spec</Title>
            <Subtitle>If you’re hiring, launching a new product, managing an event, or doing anything else to help designers and developers level up, we’d love to help</Subtitle>
          </PostHeader>

          <PostHeader>
            <Title>Our Sponsors</Title>
            <Subtitle>Our sponsors make it possible to create all of the content produced on the Spec Network</Subtitle>
          </PostHeader>
        </Container>

        <SponsorGrid />
      </Page>
    )
  }
}