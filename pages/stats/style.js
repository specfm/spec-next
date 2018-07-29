// @flow
import styled from 'styled-components'
import { hexa } from '../../components/globals'

export const RangeContainer = styled.div`
  @media (max-width: 968px) {
    width: 100%;

    button {
      display: flex;
      flex: 1;
    }
  }
`

export const LoadingContainer = styled.div`
  padding: 48px;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 968px;
  margin-top: 48px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContentContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: minmax(min-content, 80px) 1fr;
  grid-template-areas: "art meta";
  padding: 16px;
  grid-gap: 16px;
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: meta;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text.default};
  margin-bottom: 4px;
`

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
  line-height: 1.5;
`

export const Growth = styled.span`
  color: ${props => props.positive ? props.theme.success.default : props.theme.warn.default};
  background: ${props => props.positive ? hexa(props.theme.success.default, 0.1) : hexa(props.theme.warn.default, 0.1)};
  padding: 2px 8px;
  margin-top: 8px;
  border-radius: 4px;
  text-align: center;
`