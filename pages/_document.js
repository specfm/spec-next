// @flow
import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  // $FlowFixMe
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <title>Spec · Level Up</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta content="@specfm" name="twitter:site" />
          <meta content={"Spec · Level Up"} name="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Spec" />
          <meta name="theme-color" content={"#212325"} />
          <meta name="description" content="Podcasts and resources to help designers and developers level up"/>
          <link rel="apple-touch-icon" sizes="180x180" href="static/meta/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/meta/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/meta/favicon-16x16.png" />
          <link rel="manifest" href="/static/meta/site.webmanifest" />
          <link rel="mask-icon" href="/static/meta/safari-pinned-tab.svg" color="#212325" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <link href={'/static/normalize.css'} rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}}
          />
        </body>
      </html>
    )
  }
}
