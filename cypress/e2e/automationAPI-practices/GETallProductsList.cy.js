describe('get all products list', () => {
    it('GET 200', () => {
        cy.request({
            method: 'GET',
            url: "https://automationexercise.com/api/productsList"
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length.greaterThan(0)
            cy.step("products: ")
            cy.log(JSON.stringify(response));
        });
        
    });
});