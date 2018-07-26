// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  margin-top: 128px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.text.tertiary};
  max-width: 320px;
`

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  a {
    color: ${props => props.theme.text.tertiary};
  }

  a:hover {
    color: ${props => props.theme.text.default};
  }

  .icon {
    margin-left: 16px;
  }
`