// @flow
import * as React from 'react'
import type { Host } from '../../types'
import { Grid } from './style'
import HostCard from '../HostCard'

type Props = {
  hosts: Array<Host>
}

class HostsGrid extends React.Component<Props> {
  render() {
    const { hosts } = this.props

    return (
      <Grid>
        {
          hosts.map(host => {
            if (!host) return null
            return <HostCard host={host} key={host.twitterUsername} />
          })
        }
      </Grid>
    )
  }
}

export default HostsGrid