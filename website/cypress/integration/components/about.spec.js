describe('About', () => {
    it('Visits the component', () => {
      cy.visit('http://localhost:3000/#about');
    })
    it('Verify main ui elements', () => {
        cy.contains('Home');
        cy.contains('About Me');
        cy.contains('developer');
        cy.contains('Contact Me');
        cy.get('img[class="profile-pic"]');
        cy.get('li[class="current"]').contains('About');
      })
    it('Verify navigation', () => {
        cy.contains('Contact Me').click()
        cy.url().should('include', '#contact')
        cy.contains('About').click()
        cy.url().should('include', '#about')
    })
  })