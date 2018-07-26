// @flow
import * as React from 'react'
import { api } from '../../../config'
import { Container, SearchInput, AlgoliaLogo } from './style'
import { InstantSearch, Hits, connectSearchBox } from 'react-instantsearch-dom';
import { injectGlobal } from 'styled-components'
import SearchEpisode from './SearchEpisode'
import OutsideClickHandler from '../../OutsideClickHandler'

injectGlobal`
  .ais-InstantSearch__root {
    width: 100%;
    position: relative;
  }

  .ais-Hits {
    position: absolute;
    top: 48px;
    left: 50%;
    width: 50%;
    height: 100%;
    transform: translateX(-50%);
    width: 100%;
    background: #FFF;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    flex: none;
    height: auto;
    max-height: 400px;
    overflow-y: scroll;
    max-width: 100%;
  }

  .ais-Hits-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    height: auto;
  }

  .ais-Hits-item {
    display: flex;
    flex: 1 0 auto;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0!important;
    box-shadow: none;
  }

  .ais-Hits-item a {
    width: 100%;
  }

  .ais-Hits-item > div {
    padding: 0!important;
    margin: 0!important;
    border: 0!important;
  }

  .ais-Hits-item:last-of-type section {
    border-bottom: 0;
  }
`

const ALGOLIA_SEARCH_KEY = "edad66bc16c4912d142a8e7dae608ccd"
const ALGOLIA_APP_ID = "M8MTCTQX8H"
const INDEX = process.env.NODE_ENV === 'production' ? 'episodes' : 'dev_episodes'

const MySearchBox = ({ currentRefinement, refine, onChange }: any) =>
  <SearchInput
    type="search"
    autoFocus
    value={currentRefinement}
    onFocus={onChange}
    onChange={e => { onChange(e); refine(e.target.value) }}
    placeholder={"Search for shows and episodes..."}
  />;

const ConnectedSearchBox = connectSearchBox(MySearchBox);

type EpisodeProps = {
  hit: any
}

class Episode extends React.Component<EpisodeProps> {
  render() {
    const { hit } = this.props
    const podcast = api.getConfigPodcastFromId(hit.podcastId)
    if (!podcast) return null
    return (
      <SearchEpisode podcast={podcast} episode={hit} />
    )
  }
}

type State = {
  value: ?string,
}

class Search extends React.Component<{}, State> {
  state = {
    value: ''
  }

  onChange = (e: any) => {
    return this.setState({ value: e.target.value })
  }

  clear = () => {
    return this.setState({ value: '' })
  }

  render() {
    const { value } = this.state

    return (
      <Container>
        <OutsideClickHandler onOutsideClick={this.clear} style={{width:'100%'}}>
          { value && <a href="https://algolia.com" target="_blank" rel="noopener noreferrer"><AlgoliaLogo src={'/static/img/algolia.svg'}/></a> }
          <InstantSearch
            appId={ALGOLIA_APP_ID}
            apiKey={ALGOLIA_SEARCH_KEY}
            indexName={INDEX}
          >
            <ConnectedSearchBox onChange={this.onChange} />
            {
              value && value.length > 0 &&
              <Hits hitComponent={Episode} />
            }
          </InstantSearch>
        </OutsideClickHandler>
      </Container>
    )
  }
}

export default Search