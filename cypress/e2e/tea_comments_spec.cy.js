describe('As a user, I will be able to read and add a comment about my selected tea', () => {
  
  beforeEach( () => {
    cy.visit('/3')
  })

  it('should display a page loading icon while waiting for information to display on page', () => {
    cy
      .get('[data-cy="spinner"]').should('exist')
      .then(() => {
        cy
          .get('[data-cy="spinner"]').should('not.exist')
    })
  })

  it('should display a comments section with a comment form and user comments', () => {
    cy
      .get('[data-cy="comments-container"]')
      .get('[data-cy="comments-section"]')
      .get('[data-cy="comments-title"]').contains('Share Your Thoughts with Us')
      .get('[data-cy="comment-form"]')
      .get('[data-cy="comment-card"]').contains('Gina')
      .get('[data-cy="comment-card"]').contains("Oh man, this is amazing. This may very well be my new favorite. It is exquisite, like drinking the essence of spring. At 3 minutes, there is absolutely no bitterness (I think I prefer 2 minutes, it is a perfect, delicate, pale green elixir). I was afraid to try it because I don't like smoky flavored tea at all. But I am getting zero smoke flavor. It's nutty, buttery, green, and fabulous!")
  })

  it('should allow the user to submit a new comment through the form and then display the new comment on the screen', () => {
    cy
      .get('[data-cy="user_name"]').click().type('Stephanie')
      .get('[data-cy="user_message"]').click().type('This is life-changing.')
      .get('[data-cy="form-button"]').click()
      .get('[data-cy="comment-card"]').contains('Stephanie')
      .get('[data-cy="comment-card"]').contains('This is life-changing.')
  })

  it('should prompt the user to fill out all fields if the user tries to submit the form without filling in both fields ', () => {
    cy
      .get('[data-cy="user_name"]').click().type('Stephanie')
      .get('[data-cy="form-button"]').click()
      .get('[data-cy="error-message"]').contains('Please fill out all fields')
  })

  it('should display an error message (500 status code) if teas are unable to be displayed on the screen', () => {
    cy
      .intercept('GET','http://localhost:9000/api/v1/comments', {
        statusCode: 500,
        body: {
          error: 'It looks like there was a problem loading our comments but please feel free to submit your own!',
        },
      })
      .get('[data-cy="error"]').contains('It looks like there was a problem loading our comments but please add your own.')
  })

})