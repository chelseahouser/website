describe('Home Page', () => {
    it('Visits the page', () => {
      cy.visit('http://localhost:3000/');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
      })
    it('Verify navigation', () => {
        cy.contains('About').click()
        cy.url().should('include', '#about')
        cy.contains('Home').click()
        cy.url().should('include', '#home')
    })
  })