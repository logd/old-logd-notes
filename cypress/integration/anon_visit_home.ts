describe('Anonymous acccess to homepage', function() {
    it('is redirected to the login page', function() {
      cy.visit('localhost:3000')
      cy.get('[data-cy=login]')
    })
})