// @flow
import * as React from 'react';
import { Notes } from './style';

type Props = {
  children: React.Node,
};

function LinkRenderer(props: any) {
  const { children, href } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

class Markdown extends React.Component<Props> {
  render() {
    const { children } = this.props;
    return <Notes renderers={{ link: LinkRenderer }}>{children}</Notes>;
  }
}

export default Markdown;
