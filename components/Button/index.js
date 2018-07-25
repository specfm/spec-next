// @flow
import * as React from 'react'
import * as Styled from './style'

export type Size = 'small' | 'large' | 'default';
export type Props = {
  size?: Size,
  disabled?: boolean,
  children: React.Node,
};

export const ButtonRow = Styled.ButtonRow
export const ButtonSegmentRow = Styled.ButtonSegmentRow

export class Button extends React.Component<Props> {
  render() {
    return (
      <Styled.Button>
        {this.props.children}
      </Styled.Button>
    )
  }
}

export class PrimaryButton extends React.Component<Props> {
  render() {
    return (
      <Styled.PrimaryButton>
        {this.props.children}
      </Styled.PrimaryButton>
    )
  }
}

export class GhostButton extends React.Component<Props> {
  render() {
    return (
      <Styled.GhostButton>
        {this.props.children}
      </Styled.GhostButton>
    )
  }
}

export class OutlineButton extends React.Component<Props> {
  render() {
    return (
      <Styled.OutlineButton>
        {this.props.children}
      </Styled.OutlineButton>
    )
  }
}