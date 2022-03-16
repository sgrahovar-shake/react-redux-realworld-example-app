import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../support/PageObjects/LoginPage';
import SettingsPage from "../../support/PageObjects/SettingsPage";
import YourFeed from "../../support/PageObjects/YourFeed";

const loginPage = new LoginPage();
const yourFeed = new YourFeed();
const settings = new SettingsPage();


Then('The title is Conduit', () => {
    loginPage.getPageTitle().should('eq', loginPage.title);
});


Given('User {string} is selected', (name: string) => {
    cy.log('Username string: ' + name);

    cy.fixture('users.json').its(name).then(function(data){
        loginPage.email = data.email as string;
        loginPage.password = data.password as string;
        loginPage.username = data.username as string;
    });
});


When('User inputs username', () => {
    loginPage.inputEmail();
});


When('User inputs password', () => {
    loginPage.inputPassword();
});


When('User presses Sign In button', () => {
    loginPage.pressSignInButton();
});


Then('User is logged in', () => {
    loginPage.isSignedIn();
});


Given('User signs in as {string}', (name: string) => {
    loginPage.navigate('/login');

    cy.fixture('users.json').its(name).then(function(data){
        loginPage.email = data.email as string;
        loginPage.password = data.password as string;
        loginPage.username = data.username as string;

        cy.log('User1: ' + data.username);

        loginPage.inputEmail();
        loginPage.inputPassword();
        loginPage.pressSignInButton();
        loginPage.isSignedIn();
    });
});


Given('User signs out', () => {
    loginPage.isSignedIn();
    settings.navigate('/settings');
    settings.signOut();
});


Then('User is signed out', () => {
    loginPage.isSignedOut();
})