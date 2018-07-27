describe('Podcasts', () => {
  beforeEach(() => {
    cy.visit(`/podcasts`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="podcasts-view"]').should('be.visible');
    // podcast should be visible
    cy.fixture('podcast-slugs').then(slugs => {
      slugs.map(slug => cy.get(`[data-cy="${slug}-podcast"]`).should('be.visible'))
    })
  })
});
