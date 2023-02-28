export class CommonElements {
    static get ButtonMA(){
        return cy.get('#btn-make-appointment');
    }
    static get UserInput(){
        return cy.get('input#txt-username');
    }
    static get PasswordInput(){
        return cy.get('input#txt-password');
    }
    static get ButtonLI(){
        return cy.get('button#btn-login');
    }
}