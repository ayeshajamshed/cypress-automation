describe("Admin", () => {
  it("verify the admin page functionality", () => {

    const SearchUser ='https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers';
    cy.login();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
    cy.get(".orangehrm-header-container > .oxd-button").contains("Add").click();
    cy.get(".oxd-select-text-input")
      .eq(0)
      .click()
      .log("Clicked the User Role dropdown");
    cy.get(".oxd-select-option").contains("Admin").click();
    cy.get('.oxd-select-text').eq(1).click()
    cy.get('.oxd-select-option').should('be.visible').contains('Enabled').click()

    cy.get('.oxd-autocomplete-text-input input[placeholder="Type for hints..."]').click().type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    // cy.get('.oxd-input.oxd-input--active').eq(0).type('AyeshaJamshed')
    cy.contains('label','Username').parents('.oxd-input-group').find('input').type('ayesh')
    cy.get('.oxd-input.oxd-input--active').eq(1).type('Ayesha123')
    cy.get('.oxd-input.oxd-input--active').eq(2).type('Ayesha123')
    cy.get('button[type=submit]').contains('Save').click();

  
    cy.visit(SearchUser)
    cy.contains('label','Username').parents('.oxd-input-group').find('input').type('ayesha')
    cy.get(".oxd-select-text-input")
      .eq(0)
      .click()
    cy.get(".oxd-select-option").contains("Admin").click();
    cy.get('.oxd-autocomplete-text-input input[placeholder="Type for hints..."]').click().type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option').contains('Peter Mac Anderson').click()
    cy.wait(1000)
    cy.get('.oxd-select-text').eq(1).click()
    cy.get('.oxd-select-option').should('be.visible').contains('Enabled').click()
    cy.get('.oxd-button.oxd-button--secondary').contains('Search').click()
    cy.wait(1000)
    // cy.get('.oxd-button--ghost').contains('Reset').click()
  });
});