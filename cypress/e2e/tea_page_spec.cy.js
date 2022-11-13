describe('As a user, I should be able to visit a single tea page', () => {
  
  beforeEach( () => {
    cy.intercept('GET', 'http://localhost:9000/api/v1/teas', { fixture: 'teas.json' }).as('teas')
    cy.visit('/')
    cy.wait('@teas')
  })

  it('should display an error message (500 status code) if movies are unable to be displayed on the screen', () => {
    cy.intercept(
      'GET',
      'http://localhost:9000/api/v1/teas',
      {
        statusCode: 500,
        body: {
          error: `We're taking care of a kettle that's boiling over! Please visit us again later.`,
        },
      }
    )
    cy.visit('/3')
    cy
      .get('[data-cy="error-container"]').contains(`We're taking care of a kettle that's boiling over! Please visit us again later.`)
      .get('[data-cy="home-button"]'). contains('HOME')
  });

  it('should allow the user to click on a single tea and be taken to the single tea page view', () => {
    cy
      .get('[data-cy="tea-card"]').first().click()
      .url().should('eq', 'http://localhost:3000/3')
  })

  it('should persist the header and footer when viewing a single tea', () => {
    cy
      .visit('/3')
      .get('[data-cy="header-container"]')
      .get('[data-cy="logo"]')
      .get('[data-cy="nav-bar"]')
      .get('[data-cy="home-button"]'). contains('TEAS')
      .get('[data-cy="about-button"]'). contains('ABOUT')
      .get('[data-cy="footer-container"]')
  })

  it('should display the details about the selected tea', () => {
    cy
      .get('[data-cy="tea-card"]').first().click()  
      .get('[data-cy="tea-header"]')
      .get('[data-cy="tea-name"]').contains('Yun Wu')
      .get('[data-cy="tea-type"]').contains('green tea')
      .get('[data-cy="tea-origin"]').contains('Zhejiang, China origin')
      .get('[data-cy="tea-desc"]').contains('Cloud and Mist Tea, or Yun Wu in Mandarin, is harvested at high altitudes on Huaguo Mountain where the fog is thick, keeping the tea bushes hydrated and protected from the sun rays. Once processed, Yun Wu tends to have characteristically irregular twisted leaves, however, it has also been seen rolled up into small pellets or spiral shapes. Its unique growing conditions yield a layered cup with fruity notes and a very light smokiness.')
      .get('[data-cy="tea-brew"]').contains('steep for 2-3 minutes at 170°F')
      .get('[data-cy="tea-infusions"]').contains('7 infusions')
      .get('[data-cy="tea-caffeine"]').contains('medium caffeine level')
      .get('[data-cy="tea-img"]').should('be.visible')
      .get('[data-cy="farmer-name"]').contains('Cultivated by Zhao Bi Yun')
      .get('[data-cy="farmer-img"]').should('be.visible')
      .get('[data-cy="comments-container"]')

  })

  it('should display the details about another selected tea', () => {
    cy
      .get('[data-cy="tea-card"]').last().click()  
      .get('[data-cy="tea-header"]')
      .get('[data-cy="tea-name"]').contains('Traditional Yi Kuan Yin')
      .get('[data-cy="tea-origin"]').contains('Fujian, China origin')
      .get('[data-cy="tea-infusions"]').contains('3 infusions')
      .get('[data-cy="tea-caffeine"]').contains('medium caffeine level')
      .get('[data-cy="tea-img"]').should('be.visible')
      .get('[data-cy="farmer-name"]').contains('Cultivated by He Ling')
      .get('[data-cy="farmer-img"]').should('be.visible')
  })

  it('Should be able to use the browser arrow buttons to go between the home page and individual tea page', () => {
    cy
      .get('[data-cy="tea-card"]').last().click()
      .visit('/4')
      .url().should('eq', 'http://localhost:3000/4')
      .go('back')
      .url().should('eq', 'http://localhost:3000/')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/4')
  }) 

})