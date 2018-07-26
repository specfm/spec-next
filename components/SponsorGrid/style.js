// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  max-width: 968px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`

export const Logo = styled.div`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 140px;
  height: 60px;
`