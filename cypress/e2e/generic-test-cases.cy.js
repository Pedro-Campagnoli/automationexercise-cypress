
describe("Generic Test Cases", ()=> {
  const FormData = {
    name: `user_${Date.now()}`,
    email: `user_${Date.now()}@gmail.com`,
    subject: "Teste",
    message: "Teste",
    file: "sample.pdf"
  }
  it("Test Case 6: Contact Us Form", () => {
    cy.goTo("/");
    cy.contactUsForm(FormData);
  })
})