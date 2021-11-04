describe('Books', () => {
    it('Visits the component', () => {
      cy.visit('http://localhost:3000/#books');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
        cy.contains('Shop Local');
        cy.contains('Bookstore Link');
        cy.get('li[class="current"]').contains('Books');
      })
    it('Verify navigation', () => {
        cy.contains('Home').click();
        cy.url().should('include', '#home');
        cy.contains('Books').click();
        cy.url().should('include', '#books');
    })
  })