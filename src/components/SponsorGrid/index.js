// @flow
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { sponsors } from '../../config';
import Card from '../Card';
import { Grid, LogoContainer, Logo } from './style';
import * as gtag from '../../lib/gtag';

class SponsorGrid extends React.Component<{}> {
  track = (name: string, url: string) => {
    gtag.event({
      action: 'sponsor_click',
      category: 'Sponsors',
      label: name,
      value: url,
    });
  };

  render() {
    return (
      <Grid>
        {sponsors.map(sponsor => (
          <VisibilitySensor key={sponsor.name}>
            <a
              href={sponsor.url}
              onClick={() => this.track(sponsor.name, sponsor.url)}
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
          </VisibilitySensor>
        ))}
      </Grid>
    );
  }
}

export default SponsorGrid;
