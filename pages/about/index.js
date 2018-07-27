// @flow
import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Page from '../../components/Page'
import { hosts } from '../../config'
import { Container, PostHeader, Title, } from '../../components/Blog'
import HostsGrid from '../../components/HostsGrid'
import type { Host } from '../../types'

type State = {
  shuffledHosts: ?Array<Host>
}

class Post extends React.Component<{}, State> {
  state = { 
    // $FlowFixMe
    shuffledHosts: null 
  }
  
  componentDidMount() {
    const shuffle = (array: Array<Host>): Array<Host> => {
      let currentIndex = array.length, temporaryValue, randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }

    const hostsArray = Object.keys(hosts).map(key => hosts[key])

    this.setState({
      shuffledHosts: shuffle(hostsArray)
    })
  }

  render() {
    const { shuffledHosts } = this.state

    return (
      <Page showEmailCapture={false} dataCy="about-view">

        <Head>
          <title>Spec · Level Up</title>
          <meta content={"Spec · Level Up"} name="og:title" key="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" key="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" key="twitter:title" />
        </Head>

        <Container style={{paddingTop: '88px'}}>
          <PostHeader>
            <Title>About Spec</Title>
          </PostHeader>

          <h3>Level Up</h3>
          <p>What does it mean to level up in your career?</p>

          <p>
            Spec exists to encourage the right conversations, promote the right tools and processes, and provide a culture of constant learning and improvement to the global community of developers and designers. We produce top-rated podcasts and content resources for developers and designers in every stage of their career, and we engage the community in discussion on a daily basis.
          </p>

          <h3>From industry professionals, for industry professionals</h3>
          
          <p>
            In January 2015, two independent podcasts — Design Details and Developer Tea — were started by three individuals who wanted to talk about the work they do every day. After an amazing response from the web community, we’ve teamed up to create the Spec Network to help designers and developers to learn, find great resources and connect with one another.
          </p>

          <p>
            Today our podcasts are downloaded more than 100,000 times per week and we’re working to create new shows to provide the most up-to-date resources and information for the design & development community!
          </p>

          <p>
            You can <a href="https://twitter.com/specfm" target="_blank" rel="noreferrer noopener">follow us on Twitter</a> for updates on new episodes, or join our <a href="https://spectrum.chat/specfm" target="_blank" rel="noreferrer noopener">community</a> to hang out with thousands of like-minded designers and developers.
          </p>

          <p>
            If your company or product would like to sponsor our shows, we’d love to chat! <Link href={'/sponsors'}><a>Learn more about sponsoring Spec</a></Link>.
          </p>

          <h3>The team</h3>
          <p>
            Spec is possible thanks to our incredible cast of podcast hosts, designers, developers, writers, and producers.
          </p>
        </Container>

        <div style={{padding: '16px 0'}} />

        {
          shuffledHosts &&
          <HostsGrid cols={4} hosts={shuffledHosts} />
        }
      </Page>
    )
  }
}

export default Post