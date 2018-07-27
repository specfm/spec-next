describe('Specifics', () => {
  beforeEach(() => {
    cy.visit(`/specifics`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="specifics-view"]').should('be.visible');
  })
})

describe('Type scale', () => {
  beforeEach(() => {
    cy.visit(`/specifics/type-scale`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="specifics-type-scale"]').should('be.visible');
  })
})

describe('8pt Scale', () => {
  beforeEach(() => {
    cy.visit(`/specifics/8-pt-grid`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="specifics-8pt-grid"]').should('be.visible');
  })
})