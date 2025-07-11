Cypress.Commands.add("login", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("input[placeholder='Username']").type("Admin");
  cy.get("input[name=password]").type("admin123");
  cy.get("button[type=submit]").contains("Login").click();
});
