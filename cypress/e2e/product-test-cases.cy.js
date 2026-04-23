describe("Product Test Cases", () => {
  it("Test Case 8: Verify All Products and product detail page", () => {
    cy.goTo("/");
    cy.contains(
      "h2",
      "Full-Fledged practice website for Automation Engineers",
    ).should("be.visible");
    cy.contains("a", " Products").click();
    cy.get(".features_items").should("be.visible");
    cy.get("a[href='/product_details/1']").click();
    cy.contains("h2", "Blue Top").should("be.visible");
    cy.contains("p", "Category: Women > Tops").should("be.visible");
    cy.contains("span", "Rs. 500").should("be.visible");
    cy.contains("p", " In Stock").should("be.visible");
    cy.contains("p", " New").should("be.visible");
    cy.contains("p", " Polo").should("be.visible");
  });
});
