describe('As a user, when I visit the application, I will see the header, a list of select teas, and a footer', () => {
  it('should show a user an error message if teas are unable to be displayed on the screen', () => {
    cy.intercept('GET', 'http://localhost:9000/api/v1/teas', {
      statusCode: 404,
      body: { message: `We're taking care of a kettle that's boiling over! Please visit us again later.` },
    })
    cy.get('[data-cy="error-container"]').contains(`We're taking care of a kettle that's boiling over! Please visit us again later.`)
  })

})

//  If there is an error with fetching the API information, I will get a message saying there was an error getting the tea