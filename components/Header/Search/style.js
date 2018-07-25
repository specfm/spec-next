// @flow
import styled from 'styled-components'

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
  font-size: 15px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.2s ease-in-out;
  }
`