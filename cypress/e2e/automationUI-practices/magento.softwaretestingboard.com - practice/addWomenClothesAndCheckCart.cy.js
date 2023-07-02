describe('Add women clothes and check cart', () => {
    it('visit website', () => {
        cy.step("Enter to website");
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.step("Click on women");
        cy.get('a[href="https://magento.softwaretestingboard.com/women.html"] span').click();
        cy.step("Click on tops button");
        cy.get('ol.items a').eq(0).click();
        cy.step("Click on Breathe-Easy Tank");
        cy.get('img[alt="Breathe-Easy Tank"]').click();
        cy.step("check if url is correct");
        cy.url().should('eq', "https://magento.softwaretestingboard.com/breathe-easy-tank.html");
        cy.step("Click on M size and Purple color");
        cy.get('div[aria-checked="false"]').eq(2).click();
        cy.get('div[option-label="Purple"]').click();
        cy.step("Add to cart");
        cy.get('button#product-addtocart-button').click();
        cy.wait(2000);
        cy.step("Click on cart button");
        cy.get(".showcart").click();
        cy.get(':nth-child(7) > .secondary > .action > span').click();
        cy.step("Check if Breathe-Easy Tank exists");
        cy.contains("Breathe-Easy Tank");

    });
});
