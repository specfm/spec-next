import * as React from 'react'
import { Notes } from './style'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

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
    <Notes
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{ a: LinkRenderer }}
    >
      {children}
    </Notes>
  )
}
