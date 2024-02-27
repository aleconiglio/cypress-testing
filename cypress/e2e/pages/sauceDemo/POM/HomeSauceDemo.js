class HomePage {

    elements = {
        usernameBox: () => cy.get('#user-name'),
        passwordBox: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('.error-button'),
    }

    typeUserName(username){
        this.elements.usernameBox().type(username)
    }

    typePassword(password){
        this.elements.passwordBox().type(password)
    }

    clickLogin(){
        this.elements.loginButton().click()
    }
 
}

export default new HomePage();