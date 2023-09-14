/// <reference types="Cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given('Ok', function () {
    cy.visit("https://www.google.com");
  });



When('ko', function () {
    cy.get('[class="gLFyf"]').click();
    cy.get('[class="gLFyf"]').type("Casa na natureza").type("{ENTER}");
});


Then('NOK', function () {
    cy.get('[class="uhHOwf BYbUcd"]').eq(0).click();
    cy.contains('Airbnb Newsroom').should('be.visible');
});
