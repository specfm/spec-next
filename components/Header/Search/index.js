// @flow
import * as React from 'react'
import { Container, SearchInput } from './style'

class Search extends React.Component<{}> {
  render() {
    return (
      <Container>
        <SearchInput type="text" placeholder="Search for episodes..." />
      </Container>
    )
  }
}

export default Search