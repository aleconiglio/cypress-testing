describe('Check the what´s new page', () => {
    let firstURL = "https://magento.softwaretestingboard.com/";
    let secondURL = "https://magento.softwaretestingboard.com/what-is-new.html";
    it('Enter to the Whats new page', () => {
        cy.visit(firstURL);
        cy.step("click on whats new button");
        cy.get('a[href="https://magento.softwaretestingboard.com/what-is-new.html"] span').click();
        cy.step("check if whats new button exists");
        cy.get('span[data-ui-id="page-title-wrapper"]').should('be.visible');
        cy.step("check if url is correct");
        cy.url().should('eq', secondURL);
        
    });
    
});