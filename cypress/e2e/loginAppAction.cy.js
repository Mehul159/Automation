describe('login app action',()=>{
    it('visit',()=>{
        cy.visit('/');
        cy.window().then(({app})=>{
            console.log('logged in as app: ' +app);
            app.loggedIn.active= true;
        })
    })
})