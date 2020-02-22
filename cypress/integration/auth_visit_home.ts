describe('Anonymous acccess to homepage', function() {
    it('signs in via the auth login route', function() {
      cy.visit(`/login-testing?email=${Cypress.env('TEST_EMAIL')}&password=${Cypress.env('TEST_PASSWORD')}`);
      cy.get('[data-cy=home]')
    })
})