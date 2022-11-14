describe('As a user, when I visit the application, I will see the header, a list of select teas, and a footer', () => {
  
  beforeEach( () => {
    cy.intercept('GET', 'https://te-cuento.herokuapp.com/api/v1/teas', { fixture: 'teas.json' }).as('teas')
    cy.visit('/')
    cy.wait('@teas')
  })
  
  it('should display an error message (500 status code) if movies are unable to be displayed on the screen', () => {
    cy.intercept(
      'GET',
      'https://te-cuento.herokuapp.com/api/v1/teas',
      {
        statusCode: 500,
        body: {
          error: `We're taking care of a kettle that's boiling over! Please visit us again later.`,
        },
      }
    )
    cy.visit('/')
    cy
      .get('[data-cy="error-container"]').contains(`We're taking care of a kettle that's boiling over! Please visit us again later.`)
      .get('[data-cy="home-button"]'). contains('HOME')
  })

  it('should show a user the application header with logo, title, and navigation bar', () => {
    cy
      .get('[data-cy="logo"]')
      .get('[data-cy="header-container"]')
      .get('[data-cy="logo"]')
      .get('[data-cy="nav-bar"]')
      .get('[data-cy="home-button"]'). contains('TEAS')
      .get('[data-cy="about-button"]'). contains('ABOUT')
      .get('[data-cy="footer-container"]')
  })

  it('should display a page loading icon while waiting for teas to display on page', () => {
    cy
      .visit('/')
      .get('[data-cy="spinner"]').should('exist')
      .wait('@teas').then(() => {
        cy.get('[data-cy="spinner"]').should('not.exist')
      })
  })

  it('should display all tea cards each with an image, title, and tea type', () => {
    cy
      .get('[data-cy="tea-container"]').find('[data-cy="tea-card"]')
    cy
      .get('[data-cy="tea-card"]').first()
      .get('[data-cy="card-title"]').contains('Yun Wu')
      .get('[data-cy="card-type"]').contains('green tea')
      .get('[data-cy="card-img"]').should('be.visible')
    cy
      .get('[data-cy="tea-card"]').last()
      .get('[data-cy="card-title"]').contains('Traditional Yi Kuan Yin')
      .get('[data-cy="card-type"]').contains('oolong tea')
  })

  it('should not display details for an individual tea', () => {
    cy
      .url().should('not.eq', '/3')
      .get('[data-cy="tea-page-container"]').should('not.exist')
      .get('[data-cy="tea-info"]').should('not.exist')
      .get('[data-cy="farmer-container"]').should('not.exist')
  })

  it('Should be able to use the browser arrow buttons to go between the home page and individual tea page', () => {
    cy
      .get('[data-cy="tea-card"]').first().click()
      .visit('/3')
      .url().should('eq', 'http://localhost:3000/3')
      .go('back')
      .url().should('eq', 'http://localhost:3000/')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/3')
  }) 

})
