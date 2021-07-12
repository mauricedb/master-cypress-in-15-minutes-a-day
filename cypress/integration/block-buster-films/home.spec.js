/// <reference types="Cypress" />

context('Block Buster Film Reviews', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Has the correct title - Home Page', () => {
    cy.title().should('equal', 'Block Buster Film Reviews')
    cy.get('h1').should('have.text', 'Block Buster Film Reviews')
  })

  context('The left navigation menu', () => {
    it('The first navigation link points to Top rated movies', () => {
      cy.get('.menu-left a:visible').first().should('have.text', 'Top rated movies')
    })

    it('The last  navigation link points to Celebrities', () => {
      cy.get('.menu-left').find('a:visible').last().should('have.text', 'Celebrities')
    })

    it('Nested searches', () => {
      cy.root()
      cy.get('.menu-left').within(() => {
        cy.root()
        cy.get('a:visible').first().should('have.text', 'Top rated movies')
        cy.get('a:visible').last().should('have.text', 'Celebrities')

      })
    })

    it('The navigation links have the correct text', () => {
      cy.get('.menu-left a:visible').eq(0).should('have.text', 'Top rated movies')
      cy.get('.menu-left a:visible').eq(1).should('have.text', 'Popular movies')
      cy.get('.menu-left a:visible').eq(-1).should('have.text', 'Celebrities')
    })

    it('Can navigate to Top rated movies', () => {
      cy.contains('top rated movies', { matchCase: false }).click()
      cy.title().should('equal', 'Top rated movies')
    })

    it('Can navigate to Popular movies', () => {
      cy.contains(/^popular movies$/i).click()
      cy.title().should('equal', 'Popular movies')
    })

    it('Can navigate to Celebrities', () => {
      cy.get('.menu-left').contains('Celebrities').click()
      cy.title().should('equal', 'Celebrities')
    })

  })

  context.skip('Anti-patterns', () => {
    it("Don't use variables", () => {
      // This is an anti-pattern. Don't use!
      const menuLeft = cy.get('.menu-left')
      menuLeft.find('a:visible').first().should('have.text', 'Top rated movies')
    })
  })
})
