/// <reference types="Cypress" />

context('Block Buster Film Reviews', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Has the correct title - Home Page', () => {
    cy.title().should('equal', 'Block Buster Film Reviews')
    cy.get('h1').should('have.text', 'Block Buster Film Reviews')
  })
})
