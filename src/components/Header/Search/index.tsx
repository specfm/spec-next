import * as React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from 'react-instantsearch-dom'
import { Container, AlgoliaLogo } from './style'
import OutsideClickHandler from '../../OutsideClickHandler'
import SearchInput from './SearchInput'
import SearchResult from './SearchResult'

const ALGOLIA_SEARCH_KEY = 'edad66bc16c4912d142a8e7dae608ccd'
const ALGOLIA_APP_ID = 'M8MTCTQX8H'

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY)

// dev_pisodes is a typo when i was running the first dev migration of data :P
const INDEX =
  process.env.NODE_ENV === 'production' ? 'episodes' : 'dev_episodes'

export default function Search() {
  const [value, setValue] = React.useState('')

  const onChange = (e: any) => setValue(e.target.value)

  const clear = () => setValue('')

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={clear} style={{ width: '100%' }}>
        {value && (
          <a
            href="https://algolia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AlgoliaLogo
              src="/static/img/algolia.svg"
              alt="Search by Algolia"
            />
          </a>
        )}
        <InstantSearch searchClient={searchClient} indexName={INDEX}>
          <SearchInput onChange={onChange} />

          {value && value.length > 0 && <Hits hitComponent={SearchResult} />}
        </InstantSearch>
      </OutsideClickHandler>
    </Container>
  )
}
