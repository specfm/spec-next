// @flow
import styled from 'styled-components'
import { theme } from '../theme'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 16px;
  width: 256px;
  background: ${theme.text.default};
  color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  z-index: 999;
  transform: translateY(${props => props.isVisible ? '-16px' : '80px'});
  transition: all 0.2s ease-in;
`