/// <reference types="Cypress" />

// top-rated-movies.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

context('Top rated movies', () => {
  beforeEach(() => {
    cy.visit('/top-rated-movies')
  })

  it('Has 24 movies per page', () => {
    cy.get('.movie-item-style-1').should('have.length', 24)
  })

  it('Has the correct title', () => {
    cy.title().should('equal', 'Top rated movies')
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Top rated movies')
  })

  it('The movie should be Dilwale Dulhania Le Jayenge', () => {
    cy.get('#movie-19404 > .mv-item-infor > h6 > a')
      .should('have.text', 'Dilwale Dulhania Le Jayenge')
  })
})
