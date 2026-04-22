// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goTo", (url) => {
  cy.visit(url);
  cy.contains(
    "h2",
    "Full-Fledged practice website for Automation Engineers",
  ).should("be.visible");
});

Cypress.Commands.add("register", (UserData) => {
  cy.contains("a", " Signup / Login").click();
  cy.contains("h2", "New User Signup!").should("be.visible");
  cy.get('input[placeholder="Name"]').type(UserData.name);
  cy.get('[data-qa="signup-email"]').type(UserData.email);
  cy.contains("button", "Signup").click();

  if (UserData.title.trim() == "Mr.") {
    cy.contains("label", "Mr. ").parent().find("input").check();
  } else if (UserData.title.trim() == "Mrs.") {
    cy.contains("label", "Mrs. ").parent().find("input").check();
  }
  cy.contains("label", "Password ")
    .parent()
    .find("input")
    .type(UserData.password);
  cy.contains("select", "Day ").select(UserData.birthDay);
  cy.contains("select", "Month ").select(UserData.birthMonth);
  cy.contains("select", "Year ").select(UserData.birthYear);

  if (UserData.newsletter) {
    cy.contains("label", "Sign up for our newsletter!").click();
  }
  if (UserData.specialOffers) {
    cy.contains("label", "Receive special offers from our partners!").click();
  }

  cy.contains("label", "First name ")
    .parent()
    .find("input")
    .type(UserData.firstName);
  cy.contains("label", "Last name ")
    .parent()
    .find("input")
    .type(UserData.lastName);
  cy.contains("label", "Company").parent().find("input").type(UserData.company);
  cy.contains("label", "Address ")
    .parent()
    .find("input")
    .type(UserData.address);
  cy.contains("label", "Address 2")
    .parent()
    .find("input")
    .type(UserData.address2);
  cy.contains("label", "Country ")
    .parent()
    .find("select")
    .select(UserData.country);
  cy.contains("label", "State ").parent().find("input").type(UserData.state);
  cy.contains("label", "City ").parent().find("input").type(UserData.city);
  cy.contains("label", "Zipcode ")
    .parent()
    .find("input")
    .type(UserData.zipcode);
  cy.contains("label", "Mobile Number ")
    .parent()
    .find("input")
    .type(UserData.mobilleNumber);
  cy.contains("button", "Create Account").click();

  cy.contains("b", "Account Created!")
    .should("be.visible")
    .and("contain", "Account Created!");
  cy.contains("a", "Continue").click();
});

Cypress.Commands.add("deleteAccount", (name) => {
  cy.contains("a", "Logged in as").within(() => {
    cy.get("i.fa.fa-user").should("be.visible");
    cy.get("b").should("have.text", name);
  });

  cy.contains("a", " Delete Account").click();

  cy.contains("b", "Account Deleted!")
    .should("be.visible")
    .and("contain", "Account Deleted!");
  cy.contains("a", "Continue").click();
});

Cypress.Commands.add("logout", (name) => {
  cy.contains("a", "Logged in as").within(() => {
    cy.get("i.fa.fa-user").should("be.visible");
    cy.get("b").should("have.text", name);
  });

  cy.contains("a", " Logout").click();
});

Cypress.Commands.add("login", (name, password) => {
  cy.contains("a", " Signup / Login").click();

  cy.contains("h2", "Login to your account")
    .should("be.visible")
    .and("contain", "Login to your account");
  cy.get('[data-qa="login-email"]').type(name);
  cy.get('input[placeholder="Password"]').type(password);
  cy.contains("button", "Login").click();
});
