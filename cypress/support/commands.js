// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('checkCarousel', (left, middle, right) => {
  if (left) {
    cy.get(`img[src*="${left}"]`)
      .should('not.be.visible')
      .positionToViewport('left')
  }

  cy.get(`img[src*="${middle}"]`)
    .should('be.visible')
    .positionToViewport('inside')

  cy.get(`img[src*="${right}"]`)
    .should('not.be.visible')
    .positionToViewport('right')
})

Cypress.Commands.add(
  'positionToViewport',
  { prevSubject: true },
  (element, position) => {
    cy.get(element).should(($el) => {
      const height = Cypress.$(cy.state('window')).height()
      const width = Cypress.$(cy.state('window')).width()
      const rect = $el[0].getBoundingClientRect()

      if (position == 'inside') {
        expect(
          rect.top + rect.height / 2,
          'element center not above viewport'
        ).to.be.greaterThan(0)
        expect(
          rect.top + rect.height / 2,
          'element center not below viewport'
        ).to.be.lessThan(height)
        expect(
          rect.left + rect.width / 2,
          'element center not left of viewport'
        ).to.be.greaterThan(0)
        expect(
          (rect.left, +(rect.width / 2)),
          'element center not right of viewport'
        ).to.be.lessThan(width)
      } else if (position == 'above') {
        expect(
          rect.top + rect.height / 2,
          'element center above viewport'
        ).to.be.lessThan(0)
      } else if (position == 'below') {
        expect(
          rect.top + rect.height / 2,
          'element center below viewport'
        ).to.be.greaterThan(height)
      } else if (position == 'left') {
        expect(
          rect.left + rect.width / 2,
          'element center left of viewport'
        ).to.be.lessThan(0)
      } else if (position == 'right') {
        expect(
          rect.left + rect.width / 2,
          'element center right of viewport'
        ).to.be.greaterThan(width)
      }
    })
  }
)
