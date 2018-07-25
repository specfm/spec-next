// @flow
import * as React from 'react'
import type { Host } from '../../types'
import Card from '../Card'
import { Container, Avatar, Name, Username, Meta } from './style'

type Props = {
  host: Host
}

class HostCard extends React.Component<Props> {
  render() {
    const { host } = this.props
    return (
      <a href={`https://twitter.com/${host.twitterUsername}`} target={"_blank"} rel={'noreferrer noopener'}>
        <Card>
          <Container>
            <Avatar src={host.profilePhotoUrl} />
            <Meta>
              <Name>{host.name}</Name>
              <Username>@{host.twitterUsername}</Username>
            </Meta>
          </Container>
        </Card>
      </a>
    )
  }
}

export default HostCard