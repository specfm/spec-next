// @flow
import * as React from 'react';
import Link from 'next/link';
import Card from '../../components/Card';
import type { PodcastStats } from '.';
import PodcastArt from '../../components/PodcastArt';
import { Grid, Title, Subtitle, Growth, ContentContainer, Meta } from './style';

type Props = {
  stats: Array<PodcastStats>,
  range: string,
};

class StatsGrid extends React.Component<Props> {
  render() {
    const { stats, range } = this.props;
    return (
      <Grid>
        {stats.map(statObj => {
          const positive = statObj.difference >= 0;
          if (statObj.id === 'all') {
            return (
              <Link href="/" key={statObj.id}>
                <a>
                  <Card>
                    <ContentContainer>
                      <PodcastArt
                        src="/static/og-image.jpg"
                        alt="Network total"
                      />
                      <Meta>
                        <Title>Network Total</Title>
                        <Subtitle>
                          Current: {statObj.totals.current.toLocaleString()}
                        </Subtitle>
                        {range !== 'all' && (
                          <React.Fragment>
                            <Subtitle>
                              Previous:{' '}
                              {statObj.totals.previous.toLocaleString()}
                            </Subtitle>
                            <Growth positive={positive}>
                              {statObj.difference.toString()}%
                            </Growth>
                          </React.Fragment>
                        )}
                      </Meta>
                    </ContentContainer>
                  </Card>
                </a>
              </Link>
            );
          }

          return (
            <Link href={`/podcasts/${statObj.podcast.slug}`} key={statObj.id}>
              <a>
                <Card>
                  <ContentContainer>
                    <PodcastArt
                      src={statObj.podcast.artworkUrl}
                      alt={statObj.podcast.name}
                    />
                    <Meta>
                      <Title>{statObj.podcast.name}</Title>
                      <Subtitle>
                        Current: {statObj.totals.current.toLocaleString()}
                      </Subtitle>
                      {range !== 'all' && (
                        <React.Fragment>
                          <Subtitle>
                            Previous: {statObj.totals.previous.toLocaleString()}
                          </Subtitle>
                          <Growth positive={positive}>
                            {statObj.difference.toString()}%
                          </Growth>
                        </React.Fragment>
                      )}
                    </Meta>
                  </ContentContainer>
                </Card>
              </a>
            </Link>
          );
        })}
      </Grid>
    );
  }
}

export default StatsGrid;
