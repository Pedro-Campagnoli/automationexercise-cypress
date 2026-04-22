import { createUser } from "../support/factories/UserFactory";

describe("Test Cases", () => {
  it("Test Case 1: Register User", () => {
    const UserData = createUser();
    cy.goTo("/");
    cy.register(UserData);
    cy.deleteAccount(UserData.name);
  });
  it("Test Case 2: Login User with correct email and password", () => {
    const UserData = createUser();
    cy.goTo("/");
    cy.register(UserData);
    cy.logout(UserData.name);
    cy.login(UserData.email, UserData.password);
    cy.deleteAccount(UserData.name);
  });
});
