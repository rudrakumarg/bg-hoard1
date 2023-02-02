describe('store-ui-shared', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=headercomponent--primary&args=title:Board Game;')
  );
  it('should render the component', () => {
    cy.get('bg-hoard1-header').should('exist');
  });

  it('should contain title', () => {
    cy.get('bg-hoard1-header').contains('Board Game');
  })

});
