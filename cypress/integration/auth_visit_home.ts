// import { Auth } from "aws-amplify";

describe('Authenticated acccess to homepage', function () {
    it('display the homepage', function () {
        // todo: programmatically sign in user
        cy.visit('/')
        cy.get('[data-cy=homepage]')

    })
})

// 1. visit homepage, let app bootstrap, submit useermname / pwd, request homepage again, expect page to he homepage
// ideas: pass in usernmae, pwd via params