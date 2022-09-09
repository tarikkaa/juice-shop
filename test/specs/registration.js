let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");
let randomstring = require("randomstring");

let  randomEmail = randomstring.generate({
    length: 5,
    charset: "alphabetic"
 }) + "@test.com";

let randomPassword = randomstring.generate({
    length: 8,
    charset: "alphanumeric"
 }) + "!!!";

describe('User registration', () => {
    before('Open page', async() => {
        await LoginPage.open();
        await LoginPage.openLoginPage();
        await LoginPage.goToRegistration();
      });
    /*afterEach('Go to registration page', async() => {
        await LoginPage.openLoginPage();
        await LoginPage.goToRegistration();
    })*/
    it.only('Registration successful', async() => {
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.waitForPageAvailable();

        chaiExpect(await LoginPage.baseElement.isDisplayed()).to.equal(true);
    });

    it('Registration failed: Email must be unique', async() =>{
        await Registration.registration(randomEmail, randomPassword);

        await expect(Registration.errorEmailMustBeUnique).toBeDisplayed();
    }); 

    it('Registration: inactive "Register" button - all fields are empty', async() =>{
        await expect(Registration.registerButton).toBeDisabled();
    });

    it('Registration: passwords do not match', async() => {
        await Registration.passwordField.setValue("Passw0rd");
        await Registration.repeatPasswordField.setValue("Passw0rd1");
        await Registration.securityAnswer.click();

        await expect(Registration.errorPasswordsDoNotMatch).toBeDisplayed();
    });
})




