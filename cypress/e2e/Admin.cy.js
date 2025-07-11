describe("Admin", () => {
  it("verify the admin page functionality", () => {
    cy.login();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
    cy.get(".orangehrm-header-container > .oxd-button").contains("Add").click();
    cy.get(".oxd-select-text-input")
      .eq(0)
      .click()
      .log("Clicked the User Role dropdown");
    cy.get(".oxd-select-option").contains("ESS").click();
  });
});
