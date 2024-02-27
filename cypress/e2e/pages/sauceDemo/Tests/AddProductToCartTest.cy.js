import InventoryPage from "../POM/InventoryPage";

describe('Add one product to cart', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/inventory.html')
    });

    it('it should add one product to cart correctly', () => {
        InventoryPage.addToCartClick();
        InventoryPage.checkCart();
    });
    
});