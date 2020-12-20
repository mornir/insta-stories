/// <reference types="cypress" />

context("Navigation", () => {
  it.only("goes to next story with tap", () => {
    cy.viewport("iphone-6")
    cy.visit("/")

    cy.get('[data-cy="stories"]').click("right")

    /*     cy.get(".seen img").should(
      "have.attr",
      "src",
      "https://picsum.photos/id/1016/480/840"
    )
    cy.get('[data-cy="stories"]').click("left")
    cy.get(".seen img").should(
      "have.attr",
      "src",
      "https://picsum.photos/id/1015/480/840"
    ) */
  })

  /*   it("redirects to 404 page if movie does not exist", () => {}) */
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
