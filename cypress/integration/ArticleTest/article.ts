import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../support/PageObjects/LoginPage';
import NewPost from "../../support/PageObjects/NewPost";
import YourFeed from "../../support/PageObjects/YourFeed";

const loginPage = new LoginPage();
const newPost = new NewPost();


Given('User navigates to the New Article page', () => {
    newPost.navigate('/editor');
});


Given('User posts article {string}', (articleNumber: number) => {
    cy.fixture('articles.json').its(articleNumber).then(function(data){
        newPost.articleTitle = data.title as string;
        newPost.articleDescription = data.description as string;
        newPost.articleText = data.text as string;
        newPost.articleTags = data.tags as string;

        newPost.inputArticleTitle();
        newPost.inputArticleDescription();
        newPost.inputArticleText();
        newPost.inputArticleTags();
        newPost.publishArticle();
        newPost.validateArticle();
    });
});


Given('User selects article {string} to input', (articleNumber: string) => {
    cy.fixture('articles.json').its(articleNumber).then(function(data){
        newPost.articleTitle = data.title as string;
        newPost.articleDescription = data.description as string;
        newPost.articleText = data.text as string;
        newPost.articleTags = data.tags as string;
    });
});


When('User inputs article title', () => {
    newPost.inputArticleTitle();
});


When('User inputs article description', () => {
    newPost.inputArticleDescription();
});


When('User inputs article text', () => {
    newPost.inputArticleText();
});


When('User inputs article tags', () => {
    newPost.inputArticleTags();
});


When('User publishes article', () => {
    newPost.publishArticle();
});


Given('User validates article', () => {
    newPost.validateArticle();
});