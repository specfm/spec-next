// @flow
import * as React from 'react';
import type { Host } from '../../../types';
import { Grid } from './style';
import HostCard from '../HostCard';

type Props = {
  hosts: Array<Host>,
  cols?: number,
};

class HostsGrid extends React.Component<Props> {
  render() {
    const { hosts, cols = 1 } = this.props;

    return (
      <Grid cols={cols}>
        {hosts.map(host => {
          if (!host) return null;
          return <HostCard host={host} key={host.twitterUsername} />;
        })}
      </Grid>
    );
  }
}

export default HostsGrid;
