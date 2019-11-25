// @flow
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { sponsors } from '../../config';
import Card from '../Card';
import { Grid, LogoContainer, Logo } from './style';

class SponsorGrid extends React.Component<{}> {
  render() {
    return (
      <Grid>
        {sponsors.map(sponsor => (
          <VisibilitySensor key={sponsor.name}>
            <a
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
          </VisibilitySensor>
        ))}
      </Grid>
    );
  }
}

export default SponsorGrid;
