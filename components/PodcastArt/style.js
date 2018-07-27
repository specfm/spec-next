// @flow
import styled from 'styled-components'
import Img from 'react-image'

export const BlurredArt = styled(Img)`
  border-radius: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(12px);
  opacity: 0.6;
  z-index: 1;
`

export const Art = styled(Img)`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin-bottom: -6px;
  position: relative;
  z-index: 2;
`