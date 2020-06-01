import * as React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Spec · Level Up',
  description:
    'Podcasts and resources to help designers and developers level up',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spec.fm',
    site_name: 'Spec.fm',
    images: [
      {
        url: 'https://spec.fm/static/og-image.jpg',
        alt: 'Spec.fm',
      },
    ],
  },
  twitter: {
    handle: '@specfm',
    site: '@specfm',
    cardType: 'summary_large_image',
  },
}

export default function SEO() {
  return (
    <React.Fragment>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name="theme-color" content={'#fefefe'} />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link
          rel="mask-icon"
          href="/static/meta/safari-pinned-tab.svg"
          color={'#050505'}
        />
        <link rel="manifest" href="/static/meta/site.webmanifest" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💻</text></svg>`}
        />
      </Head>
    </React.Fragment>
  )
}
