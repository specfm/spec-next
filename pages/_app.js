// @flow
import App, {Container} from 'next/app'
import * as React from 'react'
import Head from 'next/head'

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <title>Spec · Level Up</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <meta charSet="utf-8" />
          
          <meta content="@specfm" name="twitter:site" key="twitter:site" />
          <meta content={"Spec · Level Up"} name="og:title" key="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" key="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" key="twitter:title" />
          <meta name="og:type" content="website" key="og:type" />
          <meta name="og:image" content="https://spec.fm/static/og-image.jpg" key="og:image" />
          <meta name="og:site_name" content="Spec" key="og:site_name" />
          <meta name="theme-color" content="#212325" key="theme-color" />
          <meta name="description" content="Podcasts and resources to help designers and developers level up"/>

          <link rel="apple-touch-icon" sizes="180x180" href="static/meta/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/meta/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/meta/favicon-16x16.png" />
          <link rel="manifest" href="/static/meta/site.webmanifest" />
          <link rel="mask-icon" href="/static/meta/safari-pinned-tab.svg" color="#212325" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          
          {this.props.styleTags}
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}