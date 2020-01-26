describe('User Login', function () {

    this.beforeEach(function () {
        cy.visit('/login')

        // Clear inputs
        cy.get('[data-cy=email-input]').clear()
        cy.get('[data-cy=password-input]').clear()
    })
    
    it('is not redirected on a failed user login', function () {
        cy.get('[data-cy=email-input]').type('foo@bar.com')
        cy.get('[data-cy=password-input]').type('bla')
        cy.get('[data-cy=login-form]').submit()
        cy.get('[data-cy=login-page]')
    })

    it('is redirected to the homepage on successful login', function () {
        cy.get('[data-cy=email-input]').type('test1@example.com')
        cy.get('[data-cy=password-input]').type('Passw0rd!')
        cy.get('[data-cy=login-form]').submit()
        cy.get('[data-cy=homepage]')
    })

})