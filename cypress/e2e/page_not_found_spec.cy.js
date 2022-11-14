describe('empty spec', () => {

  it('should show a user the application header with logo, title, and navigation bar', () => {
    cy
      .visit('/')
      .get('[data-cy="logo"]')
      .get('[data-cy="header-container"]')
      .get('[data-cy="logo"]')
      .get('[data-cy="nav-bar"]')
      .get('[data-cy="home-button"]'). contains('TEAS')
      .get('[data-cy="about-button"]'). contains('ABOUT')
      .get('[data-cy="footer-container"]')
    })
    
    it('should navigate the user to the page not found page when a url path does not match', () => {
      cy
      .visit('/98')
      .get('[data-cy="pg-not-found"]')
      .get('[data-cy="pg-not-found-message"]').contains("You've found a page that doesn't exist. Go back home or visit these helpful resources below.")
      .get('[data-cy="not-found-home-button"]').contains('HOME')
      .get('[data-cy="links"]').contains('What is Tea? Origins of Camellia Sinensis')
      .get('[data-cy="links"]').contains('The Importance of Water Temperature in Tea Brewing')
      .get('[data-cy="links"]').contains('Tea Brewing Techniques')
  })

})