// @flow
import styled from 'styled-components'
import Img from 'react-image'

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-top: 28px;
`

export const Avatar = styled(Img)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`

export const Label = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color:#fff;
  line-height: 1.3;
  text-shadow: 0 1px 2px rgba(0,0,0,0.12);
`

export const Sublabel = styled.h5`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255,255,255,0.8);
  text-shadow: 0 1px 2px rgba(0,0,0,0.08);
`