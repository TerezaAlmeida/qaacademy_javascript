describe('Validar site Google', () => {

  it('Validar acesso ao Google', () => {
    cy.visit('https://www.google.com')
    cy.get('[id="APjFqb"]').click();
    cy.get('[id="APjFqb"]').type('casa').type('{ENTER}');

    // Clicar num link do resultado

    cy.contains('Editora Abril').click();
    cy.contains('Casa', {timeout: 10000}).should('be.visible');

  })

  it('Pesquisar onça no Google', () => {
    cy.visit('https://www.google.com')
    cy.get('[id="APjFqb"]').click();
    cy.get('[id="APjFqb"]').type('onça').type('{ENTER}');

    //Clicar em algum link de onça
    
  })
})