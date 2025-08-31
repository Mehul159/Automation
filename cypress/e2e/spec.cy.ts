describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
     cy.contains('Log in').click();
        cy.get(':nth-child(2) > .LoginModule_logSignSwitch > a').click();
        cy.get('[data-cy="signup-email"]').type('Admin@gmail.com')
        cy.get('[data-cy="signup-password"]').type('Admin');
        cy.get('[data-cy="signup"]').click()
  })
})