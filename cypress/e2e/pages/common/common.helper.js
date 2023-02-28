import { CommonConstants } from "./common.constants";
import { CommonElements } from "./common.elements";
export class CommonHelper {
    static navigateToApp(){
        cy.visit(CommonConstants.appUrl);
    }
    static login(){
        CommonElements.ButtonMA.click()
        cy.contains('h2', 'Login').should('be.visible');
        CommonElements.UserInput.type(CommonConstants.validUser);
        CommonElements.PasswordInput.type(CommonConstants.validPassword);
        CommonElements.ButtonLI.click();
    }
    
}