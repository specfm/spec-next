// @flow
import * as React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchInput } from './style';

const MySearchBox = ({
  currentRefinement,
  refine,
  onChange,
  showHeaderShadow,
}: any) => (
  <SearchInput
    type="search"
    value={currentRefinement}
    onFocus={onChange}
    onChange={e => {
      onChange(e);
      refine(e.target.value);
    }}
    placeholder="Search for shows and episodes..."
    showHeaderShadow={showHeaderShadow}
    aria-label="Search"
  />
);

const ConnectedSearchBox = connectSearchBox(MySearchBox);

export default ConnectedSearchBox;
