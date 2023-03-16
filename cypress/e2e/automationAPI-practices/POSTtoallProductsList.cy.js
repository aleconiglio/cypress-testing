describe('POST method', () => {
    it('POST to all products list', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/productsList'
        },
        ).then((response) => {
            cy.log(JSON.stringify(response.body));
        });
        
    });
});