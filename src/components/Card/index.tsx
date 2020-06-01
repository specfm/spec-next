import * as React from 'react'
import { StyledCard } from './style'

interface Props {
  children: React.ReactElement | React.ReactElement[]
  style?: unknown
}

export default function Card(props: Props) {
  const { style, children } = props
  return <StyledCard style={style}>{children}</StyledCard>
}
