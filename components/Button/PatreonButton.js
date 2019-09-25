// @flow
import React from 'react';
import * as Styled from './style';
import Icon from '../Icon';
import type { ButtonProps } from './types';

export default function PatreonButton(props: ButtonProps) {
  const { children } = props;
  return (
    <Styled.PatreonButton {...props}>
      <Icon glyph="patreon" size={24} />
      {children}
    </Styled.PatreonButton>
  );
}
