describe("login with incorrect email and incorrect password", () => {
    let email = 'incorrectEmail@gmail.com';
    let password = 'incorrectPassword';
    it("login", () =>{
        cy.step("visit the webpage");
        cy.visit('http://automationexercise.com');
        cy.ClickButton('a[href="/login"]');
        cy.step("Trying to log in");
        cy.TypeSomething('input[data-qa="login-email"]', email);
        cy.TypeSomething('input[data-qa="login-password"]', password);
        cy.ClickButton('button[data-qa="login-button"]');
        cy.contains('p', 'Your email or password is incorrect!');
    })
})