// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.bg.wash};
  z-index: 3;
  box-shadow: ${props => props.isScrolled ? '0 4px 8px rgba(0,0,0,0.04)' : 'none'};
  transition: all 0.2s ease-in-out;
`

export const Logo = styled.img`
  width: 80px;
  height: 36px;
`