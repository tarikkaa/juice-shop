let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");
let randomstring = require("randomstring");
const HomePage = require("../../pages/homePage.js");

let randomEmail = randomstring.generate({
    length: 5,
    charset: "alphabetic"
}) + "@test.com";

let randomPassword = randomstring.generate({
    length: 8,
    charset: "alphanumeric"
}) + "!!!";

let randomPasswordNotEqual = randomPassword + 1;

describe('User registration', () => {
    before('Open page', async() => {
        await HomePage.open();
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
      });

    afterEach('Go to registration page', async() => {
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
    });

    it('Registration successful', async() => {
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.waitForPageAvailable();

        chaiExpect(await LoginPage.baseElement.isDisplayed()).to.equal(true);
    });

    it('Registration failed: Email must be unique', async() =>{
        await Registration.registration(randomEmail, randomPassword);

        await chaiExpect(await Registration.errorEmailMustBeUnique.isDisplayed()).to.equal(true);
    }); 

    it('Registration: inactive "Register" button - all fields are empty', async() =>{
        await chaiExpect(await Registration.registerButton.isDisplayed()).to.equal(true);
    });

    it('Registration: passwords do not match', async() => {
        await Registration.passwordField.setValue(randomPassword);
        await Registration.repeatPasswordField.setValue(randomPasswordNotEqual);
        await Registration.securityAnswer.click();

        await chaiExpect(await Registration.errorPasswordsDoNotMatch.isDisplayed()).to.equal(true);
    });
})






