describe('Blog', () => {
    it('Visits the component', () => {
      cy.visit('http://localhost:3000/#blog');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
        cy.contains('See More');
        cy.get('li[class="current"]').contains('Blog');
      })
    it('Verify navigation', () => {
        cy.contains('Home').click();
        cy.url().should('include', '#home');
        cy.contains('Blog').click();
        cy.url().should('include', '#blog');
    })
  })