// login.js
export class LoginPage {

    emailTxt = '[data-cy="signup-email"]'
    password = '[data-cy="signup-password"]'

    visitsite() {
        cy.visit('/');
    }

    signUp() {
        cy.get(':nth-child(2) > .LoginModule_logSignSwitch > a').click()
    }

    loginButton() {
        cy.get('[data-cy="login-menu"]').click()
    }

    enterEmail(mail) {
        cy.get(this.emailTxt).type(mail);
    }

    enterPass(pass) {
        cy.get(this.password).type(pass);
    }

    signupBtn(){
        cy.get('[data-cy="signup"]').click()
    }

}
