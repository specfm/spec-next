// @flow
require('now-env');
import algoliasearch from 'algoliasearch'

const IS_PROD = process.env.NODE_ENV === 'production';
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const algolia = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export default (index: string) => {
  return algolia.initIndex(IS_PROD ? index : 'dev_' + index);
};
