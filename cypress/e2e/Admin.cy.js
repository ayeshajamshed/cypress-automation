describe("Login", () => {
  it("Login the OrangeHRM System", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
});
