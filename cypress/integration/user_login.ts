describe('User Login', function () {

    describe('Failed User Login', function () {

        it('goes to the login page', function() {
            cy.visit('/login')
            cy.get('[data-cy=login-page]')

            // Clear inputs
            cy.get('[data-cy=email-input]').clear()
            cy.get('[data-cy=password-input]').clear()
          })
       
        it('enters an unregistered email address', function () {
            cy.get('[data-cy=email-input]')
                .type('foo@bar.com')
        })


        it('enters an invalid password', function () {
            cy.get('[data-cy=password-input]')
                .type('bla')
        })

        it('submits the form', function () {
            cy.get('[data-cy=login-form]').submit()
        })

        it('is not redirected', function () {
            cy.get('[data-cy=login-page]')
        })
    })

    describe('Successful User Login', function() {

        it('goes to the login page', function() {
            cy.visit('/login')
            cy.get('[data-cy=login-page]')

            // Clear inputs
            cy.get('[data-cy=email-input]').clear()
            cy.get('[data-cy=password-input]').clear()
          })
 
        it('enters a registered email address', function() {
            cy.get('[data-cy=email-input]')
            .type('test1@example.com')
          })

          it('enters a valid password', function() {
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

})