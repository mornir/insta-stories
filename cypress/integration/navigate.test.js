/// <reference types="cypress" />

context('Touch Navigation', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')

    cy.get('[data-cy="stories"]').as('stories')
  })

  it('goes to next and previous story', () => {
    cy.get('@stories').click('right')
    cy.get('img[src*="1016"]').should('not.be.visible')
    cy.get('.opacity-0 img').should('have.attr', 'src').and('contain', '1016')

    cy.get('@stories').click('left')
    cy.get('img[src*="1016"]').should('not.have.class', 'opacity-0')
    cy.get('img[src*="1016"]').should('be.visible')
  })

  it('goes to next and previous user', () => {
    cy.get('@stories').click('right').click('right')
    cy.checkCarousel(1016, 1029, 1025)

    cy.get('@stories').click('left')
    cy.checkCarousel(null, 1015, 1029)
  })
})

context('Keyboard Navigation', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')

    cy.get('[data-cy="stories"]').as('stories')
  })

  it('goes to next and previous story', () => {
    cy.get('body').type('{downarrow}')
    cy.get('img[src*="1016"]').should('not.be.visible')
    cy.get('.opacity-0 img').should('have.attr', 'src').and('contain', '1016')

    cy.get('body').type('{uparrow}')
    cy.get('img[src*="1016"]').should('not.have.class', 'opacity-0')
    cy.get('img[src*="1016"]').should('be.visible')
  })

  it('goes to next and previous user', () => {
    cy.get('body').type('{rightarrow}')

    cy.checkCarousel(1016, 1029, 1025)

    cy.get('body').type('{leftarrow}')
    cy.checkCarousel(null, 1015, 1029)
  })
})
