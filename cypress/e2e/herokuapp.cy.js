describe("Automate the the-internet.herokuapp.com webiste", () => {
  const addElementsUrl =
    "https://the-internet.herokuapp.com/add_remove_elements/";
  const baseUrl = "https://the-internet.herokuapp.com/";
  const Dom = "https://the-internet.herokuapp.com/challenging_dom";

  it("Add/Remove Element", () => {
    cy.visit(baseUrl);
    cy.visit(addElementsUrl);
    cy.contains("Add Element").click();
    cy.contains("Add Element").click();
    cy.get(".added-manually").should("have.length", 2);
    cy.get(".added-manually").first().click();
    cy.get(".added-manually").should("have.length", 1);
  });

  it("Logs in using admin/admin credentials", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.contains(
      "Congratulations! You must have the proper credentials."
    ).should("be.visible");
  });

  it("Logs broken and working images", () => {
    cy.visit("https://the-internet.herokuapp.com/broken_images");

    cy.get("img").each(($img) => {
      const url = $img.prop("src");

      cy.request({ url: url, failOnStatusCode: false }).then((res) => {
        const status = res.status;
        if (status >= 400) {
          cy.log(`Broken image: ${url} [Status: ${status}]`);
        } else {
          cy.log(`Working image: ${url} [Status: ${status}]`);
        }
      });
    });
  });

  it("Verifies table structure", () => {
    cy.visit(Dom);
    cy.get("table thead tr th").should("have.length", 7);
    cy.get("table tbody tr").should("have.length", 10);
  });

  it("Clicks edit in the 5th row", () => {
    cy.visit(Dom);
    cy.get("table tbody tr")
      .eq(4)
      .within(() => {
        cy.contains("edit").click();
      });
  });
  it("Clicks all foo buttons", () => {
    cy.visit(Dom);
    cy.get(".button").eq(0).click(); // blue
    cy.get(".button").eq(1).click(); // red
    cy.get(".button").eq(2).click(); // green
    // cy.get("#canvas")
    //   .invoke("text")
    //   .then((text) => {
    //     cy.log("the answer is +text.trim()");
    //   });
  });
  describe("Canvas Answer Logger", () => {
    it("Should log the answer text shown below the canvas", () => {
      cy.visit("https://the-internet.herokuapp.com/challenging_dom");

      cy.get("#canvas").screenshot("canvas-snap");
      cy.task("ocrCanvas", "canvas-ocr.cy.js/canvas-snap.png").then(
        (number) => {
          cy.log("OCR Detected Answer:", number);

          // Now you can use the number in your test
          expect(number).to.be.a("number");
          expect(number).to.be.within(1, 1000000); // or whatever your expected range is
        }
      );
    });
  });
});
