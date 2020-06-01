import * as React from 'react'
import * as Styled from '../style'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  color: string
}

export class CustomNotice extends React.Component<Props> {
  static Title = Styled.CustomNoticeTitle

  static Description = Styled.CustomNoticeDescription

  render() {
    const { children, color } = this.props
    return <Styled.CustomNotice color={color}>{children}</Styled.CustomNotice>
  }
}
