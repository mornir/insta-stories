/// <reference types="cypress" />

context('Navigation', () => {
  it('goes to next and previous story with tap', () => {
    cy.viewport('iphone-6')
    cy.visit('/')

    cy.get('[data-cy="stories"]').as('stories')

    cy.get('@stories').click('right')

    cy.get('.seen img')
      .should('have.attr', 'src')
      .and('eq', 'https://picsum.photos/id/1016/480/840')

    cy.get('@stories').click('left')
    cy.get('img[src="https://picsum.photos/id/1016/480/840"]').should(
      'not.have.class',
      'seen'
    )
  })

  it.only('goes to next and previous user', () => {
    cy.viewport('iphone-6')
    cy.visit('/')

    cy.get('[data-cy="stories"]').as('stories')

    cy.get('@stories').click('right').click('right')

    cy.isInViewport('img[src="https://picsum.photos/id/1029/480/840"]')
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
