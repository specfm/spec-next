// @flow
import * as React from "react";
import styled from 'styled-components'
import { api } from '../config'
import Page from '../components/Page'

const Title = styled.h1`
  color: ${props => props.theme.text.alt};
`

class Index extends React.Component<{}> {
  static async getInitialProps() {
    const podcasts = await api.getPodcast(363)

    return { podcasts };
  }

  render() {
    return (
      <Page>
        <Title>Hey</Title>
      </Page>
    )
  }
}

export default Index;
