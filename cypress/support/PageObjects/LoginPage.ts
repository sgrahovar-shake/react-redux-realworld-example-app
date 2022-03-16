import BasePage from "./BasePage";

class LoginPage extends BasePage{

    constructor(){
        super();
    }

    emailField:string = 'input[type="email"]';
    passwordField:string = 'input[type="password"]';
    signInButton:string = 'button[type="submit"]';

    private _email: string;
    private _password: string;
    private _username: string;

    public set email(email: string){
        this._email = email;
    }

    public get email(){
        return this._email;
    }

    public set password(password: string){
        this._password = password;
    }

    public get password(){
        return this._password;
    }

    public get username(){
        return this._username;
    }

    public set username(username: string){
        this._username = username;
    }

    inputEmail(){
        let emailField = cy.get(this.emailField);
        emailField.clear().type(this.email);
    }

    inputPassword(){
        let passwordField = cy.get(this.passwordField);
        passwordField.clear().type(this.password);
    }

    pressSignInButton(){
        cy.get(this.signInButton).click()
    }

    isSignedIn(){
        cy.location('pathname', {timeout: 10000}).should('not.include', '/login');

        cy.get('ul[class="nav navbar-nav pull-xs-right"').should('exist')
            .find('li').find('a').contains(this._username);
    }

    isSignedOut(){
        cy.get('a').contains('Sign in');
        cy.get('a').contains(this._username).should('not.exist');
    }
}

export default LoginPage;