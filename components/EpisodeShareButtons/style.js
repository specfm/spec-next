// @flow
import styled from 'styled-components'

export const Container = styled.div`
  margin: 32px 0 40px;
  display: flex;
  flex-wrap: wrap;

  button {
    margin-top: 8px;
    margin-right: 8px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`