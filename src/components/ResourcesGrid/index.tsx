import * as React from 'react'
import Link from 'next/link'
import Card from '../Card'
import { OutlineButton } from '../Button'
import { Container, Grid, Art, Content, Title, Description } from './style'

export default function ResourcesGrid() {
  return (
    <Container>
      <Grid>
        <a
          href="http://littlebitesofcocoa.com/"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="resource-lbc"
        >
          <Card>
            <Art
              src="/static/img/resources/lbc.png"
              alt="Little Bites of Cocoa"
            />

            <Content>
              <Title>Little Bites of Cocoa</Title>
              <Description>Tips for iOS and Mac development</Description>
              <OutlineButton>Take a bite</OutlineButton>
            </Content>
          </Card>
        </a>

        <a
          href="https://brianlovin.com/app-dissection"
          target="_blank"
          rel="noopener noreferrer"
          data-cy="resource-ddblog"
        >
          <Card>
            <Art src="/static/img/resources/dd.png" alt="Design Details Blog" />

            <Content>
              <Title>Design Details Blog</Title>
              <Description>A closer look at UI and UX design</Description>
              <OutlineButton>Dive in</OutlineButton>
            </Content>
          </Card>
        </a>

        <Link href="/specifics">
          <a data-cy="resource-specifics">
            <Card>
              <Art src="/static/img/resources/specifics.png" alt="Specifics" />

              <Content>
                <Title>Specifics</Title>
                <Description>Reference guides for designers</Description>
                <OutlineButton>Get specific</OutlineButton>
              </Content>
            </Card>
          </a>
        </Link>
      </Grid>
    </Container>
  )
}
