// login.cy.js
import { LoginPage } from "../pom/Login";

const loginPage = new LoginPage();

describe('Login Tests', () => {
    it('visitSite', () => {
        loginPage.visitsite();
        loginPage.loginButton();
        loginPage.signUp();
        loginPage.enterEmail('abc@demo.com');
        loginPage.enterPass('Abc1d23')
        loginPage.signupBtn();
    });
});
