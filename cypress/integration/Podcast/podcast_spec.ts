/// <reference types="cypress" />

describe('Podcast', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/developer-tea`)
  })

  it('should render', () => {
    cy.get('[data-cy="podcast-view"]').should('be.visible')
    cy.fixture('subscription-options').then((subscriptions: string[]) => {
      subscriptions.map((subscription: string) =>
        cy.get(`[data-cy="subscription-${subscription}"]`).should('be.visible')
      )
    })
    cy.get('[data-cy="episodes-list"]').should('be.visible')
  })
})
