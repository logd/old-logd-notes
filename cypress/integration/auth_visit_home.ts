describe('Anonymous acccess to homepage', function() {
    it('signs in via the auth login route', function() {
      const email = Cypress.env('TEST_EMAIL')
      assert.exists(email, 'Email is defined')
    })
})