// @flow
import * as React from 'react'
import { Container, JobContainer, Title, Role, Location } from './style'
import * as gtag from '../../lib/gtag'
import type { JobListing } from '../../types'

type Props = {
  jobs: Array<?JobListing>
}

class JobsGrid extends React.Component<Props> {
  track = (name: string, url: string) => {
    gtag.event({
      action: 'job_click',
      category: 'Jobs',
      label: name,
      value: url,
    })
  }

  render() {
    const { jobs } = this.props

    return (
      <Container>
        {
          jobs.map(job => {
            if (!job) return null
            return (
              <a href={job.job_link} onClick={() => this.track(job.company.name, job.job_title)} target="_blank" rel="noopener noreferrer" key={job.id}>
                <JobContainer>
                  <Title>{job.job_title}</Title>
                  <Role>{job.company.name}</Role>
                  <Location>{job.job_location}</Location>
                </JobContainer>
              </a>
            )
          })
        }
      </Container>
    )
  }
}

export default JobsGrid