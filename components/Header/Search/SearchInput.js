// @flow
import * as React from 'react'
import { SearchInput } from './style'
import { connectSearchBox } from 'react-instantsearch-dom';

const MySearchBox = ({ currentRefinement, refine, onChange, showHeaderShadow }: any) =>
  <SearchInput
    type="search"
    autoFocus
    value={currentRefinement}
    onFocus={onChange}
    onChange={e => { onChange(e); refine(e.target.value) }}
    placeholder={"Search for shows and episodes..."}
    showHeaderShadow={showHeaderShadow}
    aria-label={'Search'}
  />;

const ConnectedSearchBox = connectSearchBox(MySearchBox);

export default ConnectedSearchBox