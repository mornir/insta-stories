/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')

    cy.get('[data-cy="stories"]').as('stories')
  })

  it.only('goes to next and previous story with tap', () => {
    cy.get('@stories').click('right')
    cy.get('img[src*="1016"]').should('not.be.visible')
    cy.get('.seen img').should('have.attr', 'src').and('contain', '1016')

    cy.get('@stories').click('left')
    cy.get('img[src*="1016"]').should('not.have.class', 'seen')
    cy.get('img[src*="1016"]').should('be.visible')
  })

  it('goes to next and previous user', () => {
    cy.get('@stories').click('right').click('right')

    cy.get('img[src*="1029"]').should('be.visible').positionToViewport('inside')

    cy.get('img[src*="1016"]')
      .should('not.be.visible')
      .positionToViewport('left')

    cy.get('img[src*="1025"]')
      .should('not.be.visible')
      .positionToViewport('right')

    cy.get('@stories').click('left')

    cy.get('img[src*="1029"]')
      .should('not.be.visible')
      .positionToViewport('right')

    cy.get('img[src*="1015"]').should('be.visible').positionToViewport('inside')
  })
})

/* context("Preview Mode", () => {
  it("cannot fetch draft content without auth token", () => {
    cy.clearCookies({ domain: null })
    cy.visit("/test-movie/?preview=true", {
      failOnStatusCode: false,
    })
    cy.get("main").should("not.contain", "Test movie")
  })
}) */
