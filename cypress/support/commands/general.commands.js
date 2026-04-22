import 'cypress-file-upload';

Cypress.Commands.add("contactUsForm", (FormData) =>{
  cy.contains("a", " Contact us").click();
  cy.contains("h2", "Get In Touch").should("be.visible");
  cy.get('input[placeholder="Name"]').type(FormData.name);
  cy.get('input[placeholder="Email"]').type(FormData.email);
  cy.get('input[placeholder="Subject"]').type(FormData.subject);
  cy.get('textarea[placeholder="Your Message Here"]').type(FormData.message);
  cy.get('input[name="upload_file"]').attachFile(FormData.file);
  cy.contains("input", "Submit").click();

  cy.contains("div", "Success! Your details have been submitted successfully.").should("be.visible");
  cy.contains("a", " Home").click();
})