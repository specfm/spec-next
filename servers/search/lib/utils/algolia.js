// @flow
import algoliasearch from 'algoliasearch';

const IS_PROD = process.env.NODE_ENV === 'production';
const { ALGOLIA_APP_ID, ALGOLIA_API_KEY } = process.env;
const algolia = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export default (index: string) =>
  algolia.initIndex(IS_PROD ? index : `dev_${index}`);
