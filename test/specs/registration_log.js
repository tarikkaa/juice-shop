

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");

describe('User registration', () => {
    it('Registration and login successful', async () => {
        await Registration.open();
        await Registration.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration("test111@test.test", "Passw0rd");
        await LoginPage.login("test111gi@test.test", "Passw0rd");

        await expect(LoginPage.basketButton).toBeExisting();
    });
})




