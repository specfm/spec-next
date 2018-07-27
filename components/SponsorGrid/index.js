// @flow
import * as React from 'react'
import { sponsors } from '../../config'
import Card from '../Card'
import { Grid, LogoContainer, Logo } from './style'
import * as gtag from '../../lib/gtag'

class SponsorGrid extends React.Component<{}> {
  track = (name: string, url: string) => {
    gtag.event({
      action: 'sponsor_click',
      category: 'Sponsors',
      label: name,
      value: url,
    })
  }

  render() {
    return (
      <Grid>
        {sponsors.map(sponsor => {
          return (
            <a key={sponsor.name} href={sponsor.url} onClick={() => this.track(sponsor.name, sponsor.url)} target={"_blank"} rel={"noopener noreferrer"}>
              <Card>
                <LogoContainer>
                  <Logo src={sponsor.logoUrl} alt={sponsor.name} />
                </LogoContainer>
              </Card>
            </a>
          )
        })}
      </Grid>
    )
  }
}

export default SponsorGrid