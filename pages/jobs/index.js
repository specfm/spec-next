// @flow
import * as React from 'react'
import type { JobListing, GetInitialProps } from '../../types'
import { api } from '../../config'
import Page, { SectionHeading, Heading, Subheading } from '../../components/Page'
import JobsGrid from '../../components/JobsGrid'
import { PrimaryButton } from '../../components/Button'
import { ActionContainer } from './style'

type Props = {
  jobs: Array<?JobListing>
}

class Jobs extends React.Component<Props> {
  static async getInitialProps({ res }: GetInitialProps) {
    let jobs

    jobs = await api.getJobs()

    if (jobs && res) {
      // cache jobs for a day
      const cacheAge = 60 * 60 * 24
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`)
    }

    return { jobs }
  }

  render() {
    const { jobs } = this.props
    return (
      <Page dataCy={'invalid-podcast-view'}>
        <SectionHeading>
          <Heading>Jobs</Heading>
          <Subheading>Level up at an industry-leading company</Subheading>
        </SectionHeading>

        {
          jobs &&
          <JobsGrid jobs={jobs} />
        }

        <ActionContainer>
          <a href="http://specfm.seeker.company/submit/job" target="_blank" rel="noopener noreferrer">
            <PrimaryButton>Post a Job</PrimaryButton>
          </a>
        </ActionContainer>
      </Page>
    )
  }
}

export default Jobs