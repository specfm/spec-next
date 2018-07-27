describe('Episode', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/design-details/171711`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="episode-view"]').should('be.visible');
    cy.get('[data-cy="episode-player"]').should('be.visible');
  })
})

describe('Invalid Podcast and Episode', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/designdetails/1717112`);
  });

  it('should render', () => {
    // podcast should be visible
    cy.fixture('podcast-slugs').then(slugs => {
      slugs.map(slug => cy.get(`[data-cy="${slug}-podcast"]`).should('be.visible'))
    })
  })
})

describe('Invalid Episode', () => {
  beforeEach(() => {
    cy.visit(`/podcasts/design-details/1717112`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="podcast-view"]').should('be.visible');
    // subscription options render
    cy.fixture('subscription-options').then(subscriptions => {
      subscriptions.map(subscription => cy.get(`[data-cy="subscription-${subscription}"]`).should('be.visible'))
    })
    // episodes render
    cy.get('[data-cy="episodes-list"]').should('be.visible');
  })
})