describe("register-user", () => {

   let username = 'Alejo';

    it("home page view", () =>{
        cy.visit('http://automationexercise.com');
        cy.get('img[src="/static/images/home/logo.png"]').should('be.visible');
        cy.ClickButton('a[href="/login"]');
        cy.contains('h2', 'New User Signup!');
        cy.TypeSomething('input[data-qa="signup-name"]', username);
        cy.TypeSomething('input[data-qa="signup-email"]', 'alejo@gmail.com');
        cy.ClickButton('button[data-qa="signup-button"]');
        cy.contains('b', 'Enter Account Information')
        cy.get('input[name="title"]').eq(0).click();
        cy.TypeSomething('input[data-qa="password"]', 'asd123');
        cy.SelectInDropDown('[data-qa="days"]', '2');
        cy.SelectInDropDown('select[data-qa="months"]', '11');
        cy.SelectInDropDown('select[data-qa="years"]', '1996');
        cy.ClickButton('input#newsletter');
        cy.ClickButton('input#optin');
        cy.TypeSomething('input[data-qa="first_name"]', username);
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
        cy.contains(`Logged in as ${username}`);
        cy.ClickButton('a[href="/delete_account"]');
        cy.contains('b', 'Account Deleted!');
    })
})


