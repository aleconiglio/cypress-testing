describe("Logout user", () => {
  let email = "asdasdasdasdasdasd@gmail.com";
  let password = "password";
  it("test", () => {
    cy.visit('https://automationexercise.com/');
    cy.step("Log in");
    cy.ClickButton('a[href="/login"]');
    cy.TypeSomething('input[data-qa="login-email"]', email);
    cy.TypeSomething('input[data-qa="login-password"]', password);
    cy.ClickButton('button[data-qa="login-button"]');
    cy.step("Log out");
    cy.ClickButton('a[href="/logout"]');
    cy.step("Check if well redirected");
    cy.url().should("be.equal", "https://automationexercise.com/login");
  });
});
