// @flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 22px;
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`

export const Name = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text.default};
  line-height: 1.2;
`

export const Username = styled.h5`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.text.tertiary};
`