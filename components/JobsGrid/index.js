// @flow
import * as React from 'react'
import { Container, JobContainer, Title, Role, Description } from './style'
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

    const truncate = str => str && str.length > 140
      ? str.slice(0, 140) + '...'
      : str

    return (
      <Container>
        {
          jobs.map(job => {
            if (!job) return null
            return (
              <a href={job.job_link} onClick={() => this.track(job.company.name, job.job_title)} target="_blank" rel="noopener noreferrer" key={job.id}>
                <JobContainer>
                  <Title>{job.job_title}</Title>
                  <Role>{job.company.name} · {job.job_location}</Role>
                  <Description>{truncate(job.job_description)}</Description>
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