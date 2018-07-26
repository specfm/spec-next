// @flow
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  grid-template-rows: auto;
  margin: 32px 0;
`