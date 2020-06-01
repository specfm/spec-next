import * as React from 'react'
import { Dismiss } from './style'

interface Props {
  onDismiss: () => void
  children: React.ReactElement | React.ReactElement[]
}

export default function DismissButton(props: Props) {
  const { onDismiss } = props

  return (
    <Dismiss onClick={onDismiss}>
      <i>×</i>
    </Dismiss>
  )
}
