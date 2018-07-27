describe('Sponsors', () => {
  beforeEach(() => {
    cy.visit(`/sponsors`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="sponsors-view"]').should('be.visible');
  })
})