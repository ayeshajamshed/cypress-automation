describe("Login", () => {
  it("Login the OrangeHRM System", () => {
    cy.login();
  });

  it("verify the admin page functionality", () => {
    cy.login();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
    cy.get(".orangehrm-header-container > .oxd-button").contains("Add").click();
  });
});
