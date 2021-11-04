describe('Contact', () => {
    it('Visits the component', () => {
      cy.visit('http://localhost:3000/#contact');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
        cy.contains('Send me a message');
        cy.get('li[class="current"]').contains('Contact');
      })
    it('Verify navigation', () => {
        cy.contains('Home').click();
        cy.url().should('include', '#home');
        cy.contains('Contact').click();
        cy.url().should('include', '#contact');
    })
  })