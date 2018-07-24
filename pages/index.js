// @flow
import React from "react";
import "isomorphic-unfetch";
import { API_URL_ROOT } from "../config";

class Index extends React.Component<{}> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const req = fetch(`${API_URL_ROOT}/podcasts.json`, {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.SIMPLECAST_API_KEY
      }
    });

    const res = await req;
    const json = await res.json();
    return { json };
  }

  render() {
    return <p>Hey</p>;
  }
}

export default Index;
