describe("login with correct email and password", () => {
    let name = 'alejo';
    let email = 'asdasdasdasdasdasd@gmail.com';
    let password = 'password';
    beforeEach(() =>{
        cy.CreateUser(email, name, password);
    })
    it("Login user with correct email and password", () => {
        cy.step("visit the web page");
        cy.visit('http://automationexercise.com');
        cy.get('img[src="/static/images/home/logo.png"]').should('be.visible');
        cy.ClickButton('a[href="/logout"]');
        cy.step("login");
        cy.TypeSomething('input[data-qa="login-email"]', email);
        cy.TypeSomething('input[data-qa="login-password"]', password);
        cy.ClickButton('button[data-qa="login-button"]');
        cy.contains(`Logged in as ${name}`);
        cy.DeleteUser();
    })
})