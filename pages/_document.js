// @flow
import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

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
      <html>
        <Head>
          <title>Spec · Level Up</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta content="@specfm" name="twitter:site" />
          <meta content={"Spec · Level Up"} name="og:title" />
          <meta content={"Podcasts and resources to help designers and developers level up"} name="og:description" />
          <meta content={"Spec · Level Up"} name="twitter:title" />
          <link href={'/static/normalize.css'} rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
