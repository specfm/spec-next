// @flow
import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  background: ${props => props.theme.bg.default};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.10);
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out;
  }
`