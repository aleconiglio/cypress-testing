describe('CODERBYTE', () => {
    let firstURL = 'https://coderbyte.com/profile';
    let secondURL = 'https://coderbyte.com/settings';
      it('visit website', () => {
        cy.visit(firstURL);
        cy.contains('settings').click();
        cy.url().should('eq', secondURL);
      });
  });