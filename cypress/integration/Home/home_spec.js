import resources from '../../../src/config/resources'
import podcasts from '../../../src/config/podcasts'
const slugs = podcasts.map(podcast => podcast.slug)

describe('Home', () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  it('should render', () => {
    // page renders
    cy.get('[data-cy="home-view"]').should('be.visible');
    // podcast should be visible
    slugs.map(slug => cy.get(`[data-cy="${slug}-podcast"]`).should('be.visible'))
    //resources should be visible
    resources.map(resource => cy.get(`[data-cy="resource-${resource}"]`).should('be.visible'))
  })
});
