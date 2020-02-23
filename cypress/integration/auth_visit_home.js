import Amplify from 'aws-amplify';
// import aws_exports from '../../src/config';

describe('Auth acccess to homepage', function () {

  before(function (done) {
    cy.login(Amplify, done);
    // runs once before all tests in the block
    // Amplify.configure({
    //   Auth: {
    //     mandatorySignIn: true,
    //     region: "us-east-1",
    //     userPoolId: "us-east-1_JpaRkoOUD",
    //     identityPoolId: "us-east-1:f966d299-d43b-4afa-b6e3-35db436bba9c",
    //     userPoolWebClientId: "1q4v4lgmrgj683ebgeor5tgoac",
    //   }
    // });
    // Auth.signIn(Cypress.env('TEST_EMAIL'), Cypress.env('TEST_PASSWORD')).then(() => done());
  })
  it('displays the homepage', function () {

    // Auth.signIn('test@user.com', 'Waa12345!')
    //   .then(() => {
    //   })
      cy.visit('/')
      cy.get('[data-cy=home]')
    // assert()
    // cy.visit(`/login-testing?email=${Cypress.env('TEST_EMAIL')}&password=${Cypress.env('TEST_PASSWORD')}`);
    // cy.get('[data-cy=home]')
  })
})