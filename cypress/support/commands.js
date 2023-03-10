// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("SelectInDropDown", (selector, choice) => {
    cy.get(selector).should('be.visible').select(choice, {force: true});
})
Cypress.Commands.add("ClickButton", (selector) => {
    cy.get(selector).click();
})
Cypress.Commands.add("TypeSomething", (selector, content) =>{
    cy.get(selector).type(content);
})

Cypress.Commands.add("CreateUser", (email, name, password) => {
    cy.step("visit web page");
    cy.visit('http://automationexercise.com');
    cy.get('img[src="/static/images/home/logo.png"]').should('be.visible');
    cy.ClickButton('a[href="/login"]');
    cy.contains('h2', 'New User Signup!');
    cy.step("name and email");
    cy.TypeSomething('input[data-qa="signup-name"]', name);
    cy.TypeSomething('input[data-qa="signup-email"]', email);
    cy.ClickButton('button[data-qa="signup-button"]');
    cy.contains('b', 'Enter Account Information')
    cy.step("signup");
    cy.get('input[name="title"]').eq(0).click();
    cy.TypeSomething('input[data-qa="password"]', password);
    cy.SelectInDropDown('[data-qa="days"]', '2');
    cy.SelectInDropDown('select[data-qa="months"]', '11');
    cy.SelectInDropDown('select[data-qa="years"]', '1996');
    cy.ClickButton('input#newsletter');
    cy.ClickButton('input#optin');
    cy.TypeSomething('input[data-qa="first_name"]', name);
    cy.TypeSomething('input[data-qa="last_name"]', 'surname');
    cy.TypeSomething('input[data-qa="company"]', 'company');
    cy.TypeSomething('input[data-qa="address"]', 'address');
    cy.SelectInDropDown('select[data-qa="country"]', 'United States');
    cy.TypeSomething('input[data-qa="state"]', 'state');  
    cy.TypeSomething('input[data-qa="city"]', 'city');
    cy.TypeSomething('input[data-qa="zipcode"]', 'zipcode');
    cy.TypeSomething('input[data-qa="mobile_number"]', '123321');
    cy.ClickButton('button[data-qa="create-account"]');
    cy.contains('b', 'Account Created!');
    cy.ClickButton('a[data-qa="continue-button"]');
    cy.contains(`Logged in as ${name}`);
})

Cypress.Commands.add("DeleteUser", () => {
    cy.step("delete account");
    cy.ClickButton('a[href="/delete_account"]');
    cy.contains('b', 'Account Deleted!');
})