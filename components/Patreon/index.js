// @flow
import React from 'react'
import { theme } from '../theme'
import { PatreonButton } from '../Button'
import Card from '../Card';
import { CustomNotice } from '../Blog'
import { 
  SidebarContainer, 
  Avatar, 
  Label, 
  Sublabel, 
  Meta,
} from './style';

export const PatreonSidebar = () => {
  return (
    <a
      href={`https://patreon.com/designdetails`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Card style={{ background: theme.social.patreon }}>
        <SidebarContainer>
          <Avatar src={"/static/img/subscription_icons/patreon.jpg"} alt={'Support us on Patreon'} />
          <Meta>
            <Label>Support on Patreon</Label>
            <Sublabel>Listener supported</Sublabel>
          </Meta>
        </SidebarContainer>
      </Card>
    </a>
  )
}

export const PatreonMain = () => {
  return (
    <CustomNotice color={theme.social.patreon}>
      <CustomNotice.Title color={theme.social.patreon}>
        Support us on Patreon
      </CustomNotice.Title>

      <CustomNotice.Description>This show is possible because of the generosity of our listeners. If you've found our podcast useful or entertaining, please consider supporting us directly by becoming a patron.</CustomNotice.Description>
      <CustomNotice.Description>Thank you for listening along with us for all these years. It means the world.</CustomNotice.Description>
      <CustomNotice.Description>- Brian and Marshall</CustomNotice.Description>

      <div style={{ padding: '12px 0'}} />

      <a
        href={`https://patreon.com/designdetails`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PatreonButton>Subscribe on Patreon</PatreonButton>
      </a>
      
    </CustomNotice>
  )
}