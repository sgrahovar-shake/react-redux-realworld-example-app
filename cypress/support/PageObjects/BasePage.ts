export default class BasePage{

    baseUrl = 'http://localhost:4100';

    navigate(path: string){
        cy.
            visit(this.baseUrl + path)
    }

    getPageTitle(){
        return cy.title();
    }
}