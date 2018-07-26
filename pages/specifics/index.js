// @flow
import * as React from 'react'
import Page, { SectionHeading, Heading, Subheading } from '../../components/Page'
import SpecificsGrid from '../../components/SpecificsGrid'

class Specifics extends React.Component<{}> {
  render() {
    return (
      <Page>
        <SectionHeading>
          <Heading>Specifics</Heading>
          <Subheading>Reference guides for designers and developers</Subheading>
        </SectionHeading>

        <SpecificsGrid />
      </Page>
    )
  }
}

export default Specifics