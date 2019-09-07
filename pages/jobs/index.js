// @flow
import * as React from 'react';
import type { JobListing, GetInitialProps } from '../../types';
import { api, jobs as staticJobs } from '../../config';
import Page, {
  SectionHeading,
  Heading,
  Subheading,
} from '../../components/Page';
import JobsGrid from '../../components/JobsGrid';
import { PrimaryButton } from '../../components/Button';
import styled from 'styled-components'

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media(max-width: 768px) {
    button, a {
      width: 100%;
    }
  }
`

type Props = {
  jobs: Array<?JobListing>,
};

class Jobs extends React.Component<Props> {
  static async getInitialProps({ res }: GetInitialProps) {
    const jobs = await api.getJobs();

    if (jobs && res) {
      // cache jobs for a day
      const cacheAge = 60 * 60 * 24;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    return { jobs };
  }

  render() {
    const { jobs } = this.props;

    const allJobs = jobs ? [...jobs, ...staticJobs] : staticJobs;

    return (
      <Page dataCy="jobs-view">
        <SectionHeading>
          <Heading>Jobs</Heading>
          <Subheading>Level up at an industry-leading company</Subheading>
        </SectionHeading>

        <ActionContainer>
          <a
            href="http://specfm.seeker.company/submit/job"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton>Post a Job</PrimaryButton>
          </a>
        </ActionContainer>

        {allJobs && allJobs.length > 0 && <JobsGrid jobs={allJobs} />}

        <ActionContainer>
          <a
            href="http://specfm.seeker.company/submit/job"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton>Post a Job</PrimaryButton>
          </a>
        </ActionContainer>
      </Page>
    );
  }
}

export default Jobs;
