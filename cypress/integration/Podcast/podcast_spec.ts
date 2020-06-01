/// <reference types="cypress" />

import podcasts from '../../../src/config/podcasts'
const slugs = podcasts.map((podcast) => podcast.slug)

describe('Podcast', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/developer-tea`)
  })

  it('should render', () => {
    // page renders
    cy.get('[data-cy="podcast-view"]').should('be.visible')
    // subscription options render
    cy.fixture('subscription-options').then((subscriptions: string[]) => {
      subscriptions.map((subscription: string) =>
        cy.get(`[data-cy="subscription-${subscription}"]`).should('be.visible')
      )
    })
    // episodes render
    cy.get('[data-cy="episodes-list"]').should('be.visible')
  })
})

describe('Invalid Podcast', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/foo`)
  })

  it('should render', () => {
    // page renders
    cy.get('[data-cy="invalid-podcast-view"]').should('be.visible')
    // podcast should be visible
    slugs.map((slug) =>
      cy.get(`[data-cy="${slug}-podcast"]`).should('be.visible')
    )
  })
})
