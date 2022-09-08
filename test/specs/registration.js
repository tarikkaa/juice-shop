

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");

describe('User registration', () => {
    before('Open page', async() => {
        await LoginPage.open();
        await LoginPage.openLoginPage();
        await LoginPage.goToRegistration();
      });
    afterEach('Go to registration page', async() => {
        await LoginPage.openLoginPage();
        await LoginPage.goToRegistration();
    })
    it('Registration successful', async() => {
        await Registration.registration("test@test.com", "Passw0rd");

        await expect(LoginPage.titleLoginWindow).toBeExisting();
    });

    it('Registration failed: Email must be unique', async() =>{
        await Registration.registration("test@test.com", "Passw0rd");

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




