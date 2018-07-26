// @flow
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  width: 100%;
  max-width: 968px;
  justify-content: center;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Number = styled.h5`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme.text.default};
`

export const Label = styled.h6`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.text.tertiary};
`