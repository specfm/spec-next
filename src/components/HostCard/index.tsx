import * as React from 'react'
import { Host } from '../../types'
import Card from '../Card'
import { Container, Avatar, Name, Username, Meta } from './style'

interface Props {
  host: Host
}

export default function HostCard(props: Props) {
  const { host } = props
  return (
    <a
      href={`https://twitter.com/${host.twitterUsername}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Card>
        <Container>
          <Avatar src={host.profilePhotoUrl} alt={host.name} />
          <Meta>
            <Name>{host.name}</Name>
            <Username>@{host.twitterUsername}</Username>
          </Meta>
        </Container>
      </Card>
    </a>
  )
}
