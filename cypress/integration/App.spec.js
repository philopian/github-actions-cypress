/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    const url = Cypress.env("baseUrl");
    cy.visit(url);
  });

  it("the App page", () => {
    const elementId = "#philwillis";
    cy.get(elementId).should("be.visible");
    cy.get(elementId).should("have.text", "phil willis");
  });
});
