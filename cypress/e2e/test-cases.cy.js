import { createUser } from "../support/factories/UserFactory";

describe("Test Cases", () => {
  let UserData;

  beforeEach(() => {
    UserData = createUser();
    cy.goTo("/");
  });

  it("Test Case 1: Register User", () => {

    cy.register(UserData);
    cy.deleteAccount(UserData.name);
  });
  it("Test Case 2: Login User with correct email and password", () => {


    cy.register(UserData);
    cy.logout(UserData.name);
    cy.login(UserData.email, UserData.password);
    cy.deleteAccount(UserData.name);
  });
  it("Test Case 3: Login User with incorrect email and password", () => {
    cy.wrongLogin(UserData.email, UserData.password );
  });
  it("Test Case 4: Logout User", () => {

    cy.register(UserData);
    cy.logout(UserData.name);
    cy.login(UserData.email, UserData.password);
    cy.deleteAccount(UserData.name);
  });
});
