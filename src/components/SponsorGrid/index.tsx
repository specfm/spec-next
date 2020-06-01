import * as React from 'react'
import { sponsors } from '~/config'
import Card from '~/components/Card'
import { Grid, LogoContainer, Logo } from './style'

export default function SponsorGrid() {
  return (
    <Grid>
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.name}
          href={sponsor.url}
          aria-label={sponsor.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card style={{ height: '100%' }}>
            <LogoContainer>
              <Logo src={sponsor.logoUrl} alt={sponsor.name} />
            </LogoContainer>
          </Card>
        </a>
      ))}
    </Grid>
  )
}
