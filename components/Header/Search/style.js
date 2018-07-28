// @flow
import styled from 'styled-components'
import { tint, hexa } from '../../globals'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-area: search;

  @media (max-width: 968px) {
    padding-top: 8px;
  }
`

export const SearchInput = styled.input`
  border-radius: 4px!important;
  background: ${props => props.showHeaderShadow ? props.theme.bg.wash : props.theme.bg.default};
  color: ${props => props.theme.text.secondary};
  padding: 12px 16px;
  width: 100%;
  box-shadow: ${props => props.showHeaderShadow ? 'none' : '0 2px 4px rgba(0,0,0,0.04)'};
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out, transform 0.3s ease-in-out;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;

  ::-webkit-input-placeholder {
    text-align: center;
  }
  
  ::-webkit-input-placeholder {
      text-align: center;
  }
  
  :-moz-placeholder { /* Firefox 18- */
      text-align: center;
  }
  
  ::-moz-placeholder {  /* Firefox 19+ */
      text-align: center;
  }
  
  :-ms-input-placeholder {  
      text-align: center;
  }

  &:hover {
    box-shadow: ${props => props.showHeaderShadow ? 'none' : '0 4px 12px rgba(0,0,0,0.1)'};
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out, transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &:focus {
    border-radius: 4px!important;
    box-shadow: ${props => props.showHeaderShadow ? 'none' : '0 4px 12px rgba(0,0,0,0.1)'};
    background: ${props => props.showHeaderShadow ? tint(props.theme.bg.wash, -4) : props.theme.bg.default};
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out, transform 0.3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &:active {
    border-radius: 4px!important;
  }
`

export const SearchEpisodeContainer = styled.section`
  padding: 12px;
  border-bottom: 1px solid ${props => hexa(props.theme.border.default, 0.4)};
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  align-items: center;

  &:hover {
    background: ${props => props.theme.bg.wash};
  }
`

export const Artwork = styled.img`
  border-radius: 4px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  max-width: 40px;
`

export const Meta = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text.default};
  line-height: 1.2;
  margin-top: 2px;
`

export const Timestamp = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
`

export const AlgoliaLogo = styled.img`
  position: absolute;
  right: 48px;
  top: 13px;
  width: 120px;
  z-index: 1;

  @media(max-width: 968px) {
    top: 21px;
  }
`