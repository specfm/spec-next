// @flow
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  margin: 16px 0;
`