describe('As a user, I will be able to read and add a comment about my selected tea', () => {
  
  beforeEach( () => {
    // cy.intercept('GET', 'http://localhost:9000/api/v1/teas/3', { fixture: 'tea.json' }).as('tea')
    // cy.intercept('GET', 'http://localhost:9000/api/v1/comments', { fixture: 'comments.json' }).as('comments')
    cy.visit('/3')
    cy.wait('@tea')
  })

  it('should persist the header and footer when viewing a single tea', () => {
    cy
      .get('[data-cy="header-container"]')
      .get('[data-cy="app-title"]').contains('Té Cuento')
      .get('[data-cy="nav-bar"]')
      .get('[data-cy="home-button"]'). contains('Teas')
      .get('[data-cy="footer-container"]')
  })

})

// As a user, I will be able to read and add a comment about select teas

//  I will see a comments section where I can see other members’ comments
//  I will see a form to add a comment
//  I will be able to type into the form and submit my comment
//  If I do not type into a form, I will receive a message to fill in all fields in the form
//  If there is an error submitting my form, I will receive a message saying there was an error and to resubmit my form
//  If there is no error submitting my form, I will receive a message saying, “Thank you for your message! “
//  If there is no error submitting my form, I will see my comment added to the comments section