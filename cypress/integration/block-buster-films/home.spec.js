context('Block Buster Film Reviews', () => {
  it('Has the correct title - Home Page', () =>{
    cy.visit('https://block-buster-film-reviews.azureedge.net')
    
    cy.title().should('equal', 'Block Buster Film Reviews')
    cy.get('h1').should('have.text', 'Block Buster Film Reviews')
  })
})
