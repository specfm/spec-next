import * as React from 'react'
import * as Styled from '../style'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
}

export class Notice extends React.Component<Props> {
  static Title = Styled.NoticeTitle

  static Description = Styled.NoticeDescription

  render() {
    const { children } = this.props
    return <Styled.Notice>{children}</Styled.Notice>
  }
}
