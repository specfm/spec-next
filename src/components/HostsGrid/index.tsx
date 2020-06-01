import * as React from 'react'
import { Host } from '~/types'
import { Grid } from './style'
import HostCard from '~/components/HostCard'

interface Props {
  hosts: Host[]
  cols?: number
}

export default function HostsGrid({ cols, hosts }: Props) {
  return (
    <Grid cols={cols}>
      {hosts.map((host) => {
        if (!host) return null
        return <HostCard host={host} key={host.twitterUsername} />
      })}
    </Grid>
  )
}
