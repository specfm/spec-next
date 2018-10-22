// @flow
import styled from 'styled-components'
import { theme } from '../theme'

export const PlayBox = styled.div`
  display: flex;
  padding: 16px;
  background: ${theme.text.default};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease-in-out;
  }
`

export const IconContainer = styled.div`
  margin-right: 8px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2px;
  color: #fff;
`

export const MiniPlayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${theme.text.default};
  width: 42px;
  height: 42px;
  border-radius: 22px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  margin-right: 16px;

  ${IconContainer} {
    position: relative;
    left: 6px;
  }

  &:active {
    transform: scale(0.96);
    transition: transform 0.1s ease-in-out;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255,255,255,0.8);
`