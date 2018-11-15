// @flow
import * as React from 'react';
import Head from 'next/head';
import { api } from '../../config';
import type { ConfigPodcast } from '../../types';
import {
  ButtonSegmentRow,
  Button,
  PrimaryButton,
} from '../../components/Button';
import Page, {
  SectionHeading,
  Heading,
  Subheading,
} from '../../components/Page';
import Spinner from '../../components/Spinner';
import { RangeContainer, LoadingContainer } from './style';
import StatsGrid from './StatsGrid';

export type PodcastStats = {
  id: number | string,
  podcast: ConfigPodcast,
  difference: number,
  totals: {
    current: number,
    previous: number,
  },
};

type State = {
  range: string,
  stats: ?Array<PodcastStats>,
  loading: boolean,
};

class Stats extends React.Component<{}, State> {
  state = {
    range: 'week',
    stats: null,
    loading: true,
  };

  getStats = async (range: string) => {
    const data = await api.getStats(range);
    return this.formatStats(data);
  };

  componentDidMount = async () => {
    const { range } = this.state;
    const stats = await this.getStats(range);
    return this.setState({ stats, loading: false });
  };

  componentDidUpdate = async (_: any, prevState: State) => {
    const curr = this.state;
    if (curr.range !== prevState.range) {
      const newStats = await this.getStats(curr.range);
      return this.setState({ stats: newStats, loading: false });
    }
  };

  formatStats = (stats: any) => {
    // first, calculate the network total stats given all the stats received
    // from the api request
    const initialValue = { id: 'all', totals: { current: 0, previous: 0 } };
    const networkTotal = stats.reduce(
      (acc, curr) =>
        Object.assign({}, acc, {
          ...acc,
          totals: {
            current: acc.totals.current + curr.totals.current,
            previous: acc.totals.previous + curr.totals.previous,
          },
        }),
      initialValue
    );

    // an array of objects where each object contains the total downloads
    // from the previous and current period of time, keyed by podcast id
    const raw = [networkTotal, ...stats];

    // add the difference to the final object to be rendered
    return raw.map(statObj => {
      const diff =
        (statObj.totals.current - statObj.totals.previous) /
        statObj.totals.previous;
      return Object.assign({}, statObj, {
        ...statObj,
        podcast: statObj.id !== 'all' && api.getConfigPodcastFromId(statObj.id),
        difference: Math.round(diff * 100),
      });
    });
  };

  changeRange = (range: string) => () => {
    this.setState({ range, loading: true });
  };

  render() {
    const { range, stats, loading } = this.state;
    const capitalize = s => s[0].toUpperCase() + s.slice(1);

    return (
      <Page dataCy="stats-view">
        <Head>
          <title>Spec · Stats</title>
          <meta content="Spec · Stats" name="og:title" key="og:title" />
          <meta
            content="Podcasts and resources to help designers and developers level up"
            name="og:description"
            key="og:description"
          />
          <meta
            content="Spec · Stats"
            name="twitter:title"
            key="twitter:title"
          />
        </Head>

        <SectionHeading>
          <Heading>Stats</Heading>
          <Subheading>Activity on the Spec Network</Subheading>
        </SectionHeading>

        <RangeContainer>
          <ButtonSegmentRow>
            {['week', 'month', 'year', 'all'].map(r => {
              if (range === r)
                return (
                  <PrimaryButton key={r} onClick={this.changeRange(r)}>
                    {capitalize(r)}
                  </PrimaryButton>
                );

              return (
                <Button onClick={this.changeRange(r)} key={r}>
                  {capitalize(r)}
                </Button>
              );
            })}
          </ButtonSegmentRow>
        </RangeContainer>

        {stats && !loading && <StatsGrid stats={stats} range={range} />}

        {loading && (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
      </Page>
    );
  }
}

export default Stats;
