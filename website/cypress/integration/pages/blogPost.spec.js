describe('Blog Post Page', () => {
    it('Visits the page', () => {
      cy.visit('http://localhost:3000/blog/Xb5W5tylj5gaDYKdTTLT');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
      })
    it('Verify navigation', () => {
        cy.contains('Home').click()
        cy.url().should('include', '#home')
    })
  })