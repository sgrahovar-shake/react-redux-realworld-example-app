import BasePage from "./BasePage";

class NewPost extends BasePage{

    constructor(){
        super();
    }

    articleTitleField: string = 'input[type="text"][placeholder="Article Title"]';
    articleDescriptionField: string = 'input[type="text"][placeholder="What\'s this article about?"]';
    articleTextField: string = 'textarea[placeholder="Write your article (in markdown)"]';
    articleTagsField: string = 'input[type="text"][placeholder="Enter tags"]';
    publishArticleButton: string = 'button[type="button"]';

    private _articleTitle: string;
    private _articleDescription: string;
    private _articleText: string;
    private _articleTags: string;

    public set articleTitle(title: string){
        this._articleTitle = title;
    }

    public set articleDescription(description: string){
        this._articleDescription = description;
    }

    public set articleText(text: string){
        this._articleText = text;
    }

    public set articleTags(tags: string){
        this._articleTags = tags;
    }

    inputArticleTitle(){
        const currentTimeInMilliseconds=Date.now();
        cy.get(this.articleTitleField).type(this._articleTitle + ' ' + currentTimeInMilliseconds);
    }

    inputArticleDescription(){
        cy.get(this.articleDescriptionField).type(this._articleDescription);
    }

    inputArticleText(){
        cy.get(this.articleTextField).type(this._articleText);
    }

    inputArticleTags(){
        cy.get(this.articleTagsField).type(this._articleTags);
    }

    publishArticle(){
        cy.get(this.publishArticleButton).click();
    }

    validateArticle(){
        cy.get('h1').contains(this._articleTitle);
    }
}

export default NewPost;