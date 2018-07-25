// @flow
import * as React from 'react'
import { sponsors } from '../../config'
import Card from '../Card'
import { Grid, LogoContainer, Logo } from './style'

class SponsorGrid extends React.Component<{}> {
  render() {
    return (
      <Grid>
        {sponsors.map(sponsor => {
          return (
            <a key={sponsor.name} href={sponsor.url} target={"_blank"} rel={"noopener noreferrer"}>
              <Card>
                <LogoContainer>
                  <Logo src={sponsor.logoUrl} />
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