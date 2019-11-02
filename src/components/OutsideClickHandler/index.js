// @flow
// $FlowIssue
import React, { useRef, useEffect } from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
  onOutsideClick: Function,
  style?: Object,
};

export default function OutsideClickHandler(props: Props) {
  const wrapperRef = useRef(null);

  function handleClickOutside(event: any) {
    const { onOutsideClick } = props;
    // $FlowFixMe
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { style, children } = props;

  return (
    <div style={style} ref={wrapperRef}>
      {children}
    </div>
  );
}
