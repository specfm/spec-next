// @flow
import * as React from 'react'
import { Dismiss } from './style'

type Props = {
  onDismiss: Function
}

class DismissButton extends React.Component<Props> {
  render() {
    const { onDismiss } = this.props

    return (
      <Dismiss onClick={onDismiss}><i>×</i></Dismiss>
    )
  }
}

export default DismissButton