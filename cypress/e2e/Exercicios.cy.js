describe( "Exercicios",() =>{
    beforeEach(()=>{
        cy.visit("https://www.google.com");
    })
    
    it('Exercicio 1',()=>{
        cy.get('[class="gLFyf"]').click();
        cy.get('[class="gLFyf"]').type("Casa na natureza").type("{ENTER}");
        cy.get('[class="uhHOwf BYbUcd"]').eq(0).click();
        cy.contains('Airbnb Newsroom').should('be.visible');
    })
    it.only('Exercicio 2 e 3',()=>{
        cy.get('[class="gLFyf"]').click();
        cy.get('[class="gLFyf"]').type("Casas bahia").type("{ENTER}");
        cy.get('[class="v5yQqb"]',{timeout:10000}).click();
        cy.origin('https://www.casasbahia.com.br', () => {
            cy.get('[data-testid="retira-rapido"]',{timeout:5000}).click();
    
        })
    })
})