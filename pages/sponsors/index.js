// @flow
import * as React from 'react'
import Head from 'next/head'
import Page from '../../components/Page'
import SponsorGrid from '../../components/SponsorGrid'
import { SectionHeading, Heading, Subheading } from '../../components/Page'

export default class Sponsors extends React.Component<{}> {
  render() {
    return (
      <Page>

        <Head>
          <title>Spec · Sponsors</title>
          <meta content={"Spec · Sponsors"} name="og:title" />
          <meta content={"If you’re hiring, launching a new product, managing an event, or doing anything else to help designers and developers level up, we’d love to help"} name="og:description" />
          <meta content={"Spec · Sponsors"} name="twitter:title" />
        </Head>

        <SectionHeading>
          <Heading>Sponsoring Spec.fm</Heading>
          <Subheading>
            If you’re hiring, launching a new product, managing an event, or doing anything else to help designers and developers level up, we’d love to help
          </Subheading>
        </SectionHeading>

        <SectionHeading>
          <Heading>Our amazing sponsors</Heading>
          <Subheading>
            Our sponsors make it possible to create all of the content produced on the Spec Network
          </Subheading>
        </SectionHeading>

        <SponsorGrid />
      </Page>
    )
  }
}