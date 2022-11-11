describe('As a user, when I visit the application, I will see the header, a list of select teas, and a footer', () => {
  it('should show a user an error message if teas are unable to be displayed on the screen', () => {
    cy.intercept('GET', 'http://localhost:9000/api/v1/teas', {
      statusCode: 404,
      body: { message: 'Failed to Fetch' },
    })
    cy.get('[data-cy="error-container"]').contains('[data-cy="error-container"]')
  })

})

