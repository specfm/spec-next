// @flow
import styled from 'styled-components'

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media(max-width: 768px) {
    button, a {
      width: 100%;
    }
  }
`