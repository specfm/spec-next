// @flow
import styled from 'styled-components'
import { hexa } from '../../globals'

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  border-radius: 4px;
  background: ${props => props.theme.bg.default};
  color: ${props => props.theme.text.secondary};
  padding: 12px 16px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  transition: all 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
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