/// <reference types="cypress" />

describe("Moja pierwsza testowa aplikacja", () => {
  it("Otwiera stronę główną", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Bookrary").should("be.visible");
  });
});

describe("Test przycisku", () => {
  it("Kliknięcie przycisku powoduje wyświetlenie tekstu", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Open SpaceX Locations").click();

    cy.contains("SpaceX Locations").should("be.visible");
  });
});
