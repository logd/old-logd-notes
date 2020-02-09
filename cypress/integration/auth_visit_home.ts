describe('Authenticated acccess to homepage', function () {
    it('displays the homepage by default', function () {
        cy.visit(`/testing-login/${Cypress.env('TEST_USER_EMAIL')}/${Cypress.env('TEST_USER_PASSWORD')}`)
        cy.get('[data-cy=homepage]')

    })
})
