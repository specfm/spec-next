describe('Home', () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="home-view"]').should('be.visible');
    // podcast should be visible
    cy.fixture('podcast-slugs').then(slugs => {
      slugs.map(slug => cy.get(`[data-cy="${slug}-podcast"]`).should('be.visible'))
    })
    //resources should be visible
    cy.fixture('resources').then(resources => {
      resources.map(resource => cy.get(`[data-cy="resource-${resource}"]`).should('be.visible'))
    })
  })
});
