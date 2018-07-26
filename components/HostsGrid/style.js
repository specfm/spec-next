// @flow
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 32px 0;
`

export const Divider = styled.div`
  position: relative;
  height: 1px;
  border-bottom: 1px solid ${props => props.theme.border.default};
  width: 100%;
  margin-top: 48px;
`

export const Label = styled.span`
  position: relative;
  top: -13px;
  background: ${props => props.theme.bg.wash};
  padding: 2px 16px 2px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
`