import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../../support/PageObjects/BasePage";

const basePage = new BasePage();

Given('User navigates to the login page', () => {
    basePage.navigate('/login');
});

Given('User clicks on New Post', () => {
    cy.get('a').contains('New Post').click();
})