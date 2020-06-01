import algoliasearch from 'algoliasearch'

const IS_PROD = process.env.NODE_ENV === 'production'

const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
)

export default (index: string) =>
  algolia.initIndex(IS_PROD ? index : `dev_${index}`)
