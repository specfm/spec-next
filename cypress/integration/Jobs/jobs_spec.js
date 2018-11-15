describe('Jobs', () => {
  beforeEach(() => {
    cy.visit(`/jobs`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="jobs-view"]').should('be.visible');
  })
})