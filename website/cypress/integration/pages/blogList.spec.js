describe('Blog List Page', () => {
    it('Visits the page', () => {
      cy.visit('http://localhost:3000/blogs');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
      })
    it('Verify navigation', () => {
        cy.contains('Home').click()
        cy.url().should('include', '#home')
    })
  })