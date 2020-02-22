describe('Anonymous acccess to homepage', function() {
    it('is redirected to the login page', function() {
      cy.visit('/')
      cy.get('[data-cy=login]')
    })
})