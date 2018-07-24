// @flow
import * as React from "react";
import { api } from '../config'

class Index extends React.Component<{}> {
  static async getInitialProps() {
    const podcasts = await api.getPodcast(363)

    return { podcasts };
  }

  render() {
    return <p>Hey</p>;
  }
}

export default Index;
