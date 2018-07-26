// @flow
import * as React from 'react'
import Head from 'next/head'
import Page from '../../components/Page'
import { SectionHeading, Heading, Subheading } from '../../components/Page'

export default class About extends React.Component<{}> {
  render() {
    return (
      <Page>

        <Head>
          <title>Spec · Level Up</title>
          <meta content={"Spec · Level Up"} name="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" />
        </Head>

        <SectionHeading>
          <Heading>About Us</Heading>
          <Subheading>
            
          </Subheading>
        </SectionHeading>
      </Page>
    )
  }
}