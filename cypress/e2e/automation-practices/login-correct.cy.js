describe("Login-correct", () => {
    let name = 'alejo';
    let surname = 'surname'; 
    let email = 'alejo@gmail.com';
    let password = 'password';
    beforeEach(() =>{
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
        cy.TypeSomething('input[data-qa="last_name"]', surname);
        cy.TypeSomething('input[data-qa="company"]', 'company');
        cy.TypeSomething('input[data-qa="address"]', 'address');
        cy.SelectInDropDown('select[data-qa="country"]', 'United States');
        cy.TypeSomething('input[data-qa="state"]', 'state');  
        cy.TypeSomething('input[data-qa="city"]', 'city');
        cy.TypeSomething('input[data-qa="zipcode"]', 'zipcode');
        cy.TypeSomething('input[data-qa="mobile_number"]', '123321');
        cy.ClickButton('button[data-qa="create-account"]');
        cy.contains('b', 'Account Created!');
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
        cy.step("delete account");
        cy.ClickButton('a[href="/delete_account"]');
        cy.contains('b', 'Account Deleted!');
    })
})