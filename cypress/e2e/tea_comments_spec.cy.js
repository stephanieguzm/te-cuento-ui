describe('As a user, I will be able to read and add a comment about my selected tea', () => {
  
  beforeEach( () => {
    cy.intercept('GET', 'http://localhost:9000/api/v1/comments', { fixture: 'comments.json' })
      .as('comments')
    cy.visit('/3')
    cy.wait('@comments')
  })

  it('should display a comments section with a comment form and user comments', () => {
    cy
      .get('[data-cy="comments-container"]')
      .get('[data-cy="comments-section"]')
      .get('[data-cy="comments-title"]').contains('Share Your Thoughts with Us!')
      .get('[data-cy="comment-form"]')
      .get('[data-cy="comment-card"]').contains('Gina')
      .get('[data-cy="comment-card"]').contains("Oh man, this is amazing. This may very well be my new favorite. It is exquisite, like drinking the essence of spring. At 3 minutes, there is absolutely no bitterness (I think I prefer 2 minutes, it is a perfect, delicate, pale green elixir). I was afraid to try it because I don't like smoky flavored tea at all. But I am getting zero smoke flavor. It's nutty, buttery, green, and fabulous!")
  })

  .get('[data-cy="comment-form"]')

})

// As a user, I will be able to read and add a comment about select teas

//  I will see a comments section where I can see other members’ comments
//  I will see a form to add a comment
//  I will be able to type into the form and submit my comment
//  If I do not type into a form, I will receive a message to fill in all fields in the form
//  If there is an error submitting my form, I will receive a message saying there was an error and to resubmit my form
//  If there is no error submitting my form, I will receive a message saying, “Thank you for your message! “
//  If there is no error submitting my form, I will see my comment added to the comments section