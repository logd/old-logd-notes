describe('User Login', function() {
    it('goes to the login page', function() {
      cy.visit('/login')
      cy.get('[data-cy=login-page]')
    })

    it('enters an email address', function() {
        cy.get('[data-cy=email-input]')
        .type('test1@example.com')
      })

      it('enters a password', function() {
        cy.get('[data-cy=password-input]')
        .type('Passw0rd!')
      })

      it('submits the form', function() {
        cy.get('[data-cy=login-form]')
        .submit()
      })

      it('is redirected to the homepage', function() {
        cy.get('[data-cy=homepage]')
      })
})