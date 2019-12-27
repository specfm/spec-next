// @flow
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Card from '../Card';
import { Art } from './style';

type Props = {
  src: string,
  alt: string,
};

class PodcastArt extends React.Component<Props> {
  render() {
    const { src, alt } = this.props;

    return (
      <VisibilitySensor>
        <Card>
          <Art src={src} alt={alt} />
        </Card>
      </VisibilitySensor>
    );
  }
}

export default PodcastArt;
