const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')()

module.exports = withSourceMaps({
  env: {
    SPECFM_FATHOM_SITE_ID: process.env.SPECFM_FATHOM_SITE_ID,
    SPECFM_FATHOM_CUSTOM_URL: process.env.SPECFM_FATHOM_CUSTOM_URL,
    SIMPLECAST_V2_API_KEY: process.env.SIMPLECAST_V2_API_KEY,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SEARCH_INDEXING_TOKEN: process.env.SEARCH_INDEXING_TOKEN,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = path.resolve('./src')

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config
  },
})
