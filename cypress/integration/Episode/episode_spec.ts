/// <reference types="cypress" />

describe('Episode', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/developer-tea/317916`)
  })

  it('should render', () => {
    // page renders
    cy.get('[data-cy="episode-view"]').should('be.visible')
  })
})
