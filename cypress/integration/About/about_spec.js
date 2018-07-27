describe('About', () => {
  beforeEach(() => {
    cy.visit(`/about`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="about-view"]').should('be.visible');
  })
})