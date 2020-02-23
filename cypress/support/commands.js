// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// import Amplify, { Auth } from 'aws-amplify';
// const Amplify = require('aws-amplify');

Cypress.Commands.add("login", (Amplify, done) => {
    Amplify.configure({
        Auth: {
          mandatorySignIn: true,
          region: "us-east-1",
          userPoolId: "us-east-1_JpaRkoOUD",
          identityPoolId: "us-east-1:f966d299-d43b-4afa-b6e3-35db436bba9c",
          userPoolWebClientId: "1q4v4lgmrgj683ebgeor5tgoac",
        }
      });
      Amplify.Auth.signIn(Cypress.env('TEST_EMAIL'), Cypress.env('TEST_PASSWORD')).then(() => done());
})

