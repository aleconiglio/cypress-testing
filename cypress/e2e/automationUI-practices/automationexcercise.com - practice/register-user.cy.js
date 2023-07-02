describe("register-user", () => {
    let name = 'alejo';
    let email =  'alejo@gmail.com';
    let password = 'password';
    it("home page view", () =>{
        cy.CreateUser(email, name, password);
        cy.DeleteUser();
    })
})