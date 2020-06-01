import * as React from 'react'
import { Notes } from './style'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
}

function LinkRenderer(props: any) {
  const { children, href } = props
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default function Markdown(props: Props) {
  const { children } = props
  return (
    <Notes escapeHtml={false} renderers={{ link: LinkRenderer }}>
      {children}
    </Notes>
  )
}
