import BasePage from "./BasePage";

class SettingsPage extends BasePage{

    constructor(){
        super();
    }

    profilePictureField: string = 'input[type="text"][placeholder="URL of profile picture"]';
    usernameField: string = 'input[type="text"][placeholder="Username"]';
    bioField: string = 'textarea[placeholder="Short bio about you"]';
    emailField: string = 'input[type="email"][placeholder="Email"]';
    passwordField: string = 'input[type="password"][placeholder="New Password"]';
    updateSettingsButton: string = 'button[type="Submit"]';
    logoutButton: string = '//button[contains(@class, "btn-outline-danger")]'

    signOut(){
        // cy.get(this.logoutButton).click();
        cy.get('button').contains('Or click here to logout.').click()
    }
}

export default SettingsPage;