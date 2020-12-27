import * as React from 'react'
import Page from '~/components/Page'
import { hosts } from '~/config'
import {
  Container,
  ContentContainer,
  Divider,
  PostHeader,
  Title,
} from '~/components/Blog'
import HostsGrid from '~/components/HostsGrid'
import { WarnNotice } from '~/components/Blog/style'

export default function About() {
  const hostsAsArray = Object.keys(hosts).map((name) => hosts[name])

  return (
    <Page dataCy="about-view">
      <Container>
        <ContentContainer style={{ paddingTop: '88px' }}>
          <PostHeader>
            <Title>About Spec</Title>
          </PostHeader>

          <WarnNotice>
            Spec.fm is no longer operating, and all podcasts operate as
            independent shows.{' '}
            <a
              href="https://sarahberus.medium.com/5-years-of-specfm-a09fa8390000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Read the Spec Network story</strong>
            </a>
            .
          </WarnNotice>

          <Divider />

          <p>What does it mean to level up in your career?</p>

          <p>
            Spec exists to encourage the right conversations, promote the right
            tools and processes, and provide a culture of constant learning and
            improvement to the global community of developers and designers. We
            produce top-rated podcasts and content resources for developers and
            designers in every stage of their career, and we engage the
            community in discussion on a daily basis.
          </p>

          <h3>From industry professionals, for industry professionals</h3>

          <p>
            In January 2015, two independent podcasts — Design Details and
            Developer Tea — were started by three individuals who wanted to talk
            about the work they do every day. After an amazing response from the
            web community, we’ve teamed up to create the Spec Network to help
            designers and developers to learn, find great resources and connect
            with one another.
          </p>

          <p>
            Today our podcasts are downloaded more than 100,000 times per week
            and we’re working to create new shows to provide the most up-to-date
            resources and information for the design & development community!
          </p>

          <h3>The team</h3>
          <p>
            Spec is possible thanks to our incredible cast of podcast hosts,
            designers, developers, writers, and producers.
          </p>
        </ContentContainer>
      </Container>

      <div style={{ padding: '16px 0' }} />

      <HostsGrid cols={4} hosts={hostsAsArray} />
    </Page>
  )
}
