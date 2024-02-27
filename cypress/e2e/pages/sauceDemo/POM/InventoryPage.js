class InventoryPage {

    elements = {
        appLogo: () => cy.get('.app_logo'),
        addToCartButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        shoppingCartButton: () => cy.get('#shopping_cart_container'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
    }

    checkLogo(){
        this.elements.appLogo().should('have.text', 'Swag Labs')
    }

    addToCartClick(){
        this.elements.addToCartButton().click()
    }

    checkCart(){
        this.elements.shoppingCartBadge().should('have.string', '1')
    }
}

export default new InventoryPage();