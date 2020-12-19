/// <reference types="cypress" />

context("Navigation", () => {
  it.only("goes to next story with tap", () => {
    /*   cy.intercept(
      'https://tufjlt9c.api.sanity.io/v1/data/query/production',
      (req) => req.reply(404)
    ).as('api')
 */

    cy.visit("/")
    cy.get('[data-cy="https://picsum.photos/id/1015/480/840"]').should(
      "be.visible"
    )
    //cy.get('[data-cy="stories"]').click("right")
  })

  it("redirects to 404 page if movie does not exist", () => {
    // cy.intercept('/a-movie-that-do-not-exis').as('movie')

    cy.visit("/a-movie-that-do-not-exist")
    cy.contains("404 not found")
    // cy.wait('@movie').its('response.statusCode').should('eq', 404)
  })
})

context("Preview Mode", () => {
  it("cannot fetch draft content without auth token", () => {
    cy.clearCookies({ domain: null })
    cy.visit("/test-movie/?preview=true", {
      failOnStatusCode: false,
    })
    cy.get("main").should("not.contain", "Test movie")
  })

  it("fetches fresh data from CMS", () => {
    cy.setCookie("sanitySession", Cypress.env().authCookie, {
      domain: ".tufjlt9c.api.sanity.io",
      sameSite: "none",
      secure: true,
    })
    cy.visit("/test-movie/?preview=true", {
      failOnStatusCode: false,
    })
    cy.contains("Draft Preview")
    cy.contains("Test movie")
  })
})
