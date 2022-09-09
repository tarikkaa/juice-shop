

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");

describe('User registration', () => {
    before('Open page', async() => {
        await LoginPage.open();
        await LoginPage.openLoginPage();
        await LoginPage.goToRegistration();
      });
    it('Registration and login successful', async () => {
        await Registration.registration();
        await LoginPage.login();

        await expect(LoginPage.basketButton).toBeExisting();
    });
})




