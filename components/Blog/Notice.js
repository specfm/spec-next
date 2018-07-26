// @flow
import * as React from 'react'
import * as Styled from './style'

type Props = {
  children: React.Node
}

export class Notice extends React.Component<Props> {
  static Title = Styled.NoticeTitle
  static Description = Styled.NoticeDescription

  render() {
    return (
      <Styled.Notice>
        {this.props.children}
      </Styled.Notice>
    )
  }
}

export class WarnNotice extends React.Component<Props> {
  static Title = Styled.WarnNoticeTitle
  static Description = Styled.WarnNoticeDescription

  render() {
    return (
      <Styled.WarnNotice>
        {this.props.children}
      </Styled.WarnNotice>
    )
  }
}