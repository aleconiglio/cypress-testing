describe('Mouseover Test', () => {
  it('Entering women jackets with mouseover', () => {
    cy.step("Enter to the website")
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.step('make the hover and click the jacket option')
    cy.get('#ui-id-4 > span:nth-child(2)').trigger('mouseover')
    cy.get('#ui-id-9 > span:nth-child(2)').trigger('mouseover')
    cy.get('#ui-id-11').click()
    cy.step('check url')
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
  })
})







