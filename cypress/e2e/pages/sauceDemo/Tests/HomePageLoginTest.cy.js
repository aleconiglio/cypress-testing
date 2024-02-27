import HomeSauceDemo from "../POM/HomeSauceDemo";
import InventoryPage from "../POM/InventoryPage";

describe('Login Page Test', () => {
    beforeEach(() => {
        cy.visit('http://www.saucedemo.com/')
    });

    it('it should log in correctly', () => {
        HomeSauceDemo.typeUserName('standard_user');
        HomeSauceDemo.typePassword('secret_sauce');
        HomeSauceDemo.clickLogin();
        InventoryPage.checkLogo();
    });
});