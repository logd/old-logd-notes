describe('Authenticated acccess to homepage', function () {
    it('displays the homepage by default', function () {
        cy.visit(`/testing-login/${Cypress.env('testEmail')}/${Cypress.env('testPassword')}`)
        cy.get('[data-cy=homepage]')

    })
})
