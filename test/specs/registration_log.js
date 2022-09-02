

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");

describe('User registration', () => {
    it('Registration and login successful', async () => {
        await Registration.open();
        await Registration.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration("test4@test.test", "Passw0rd4");
        await LoginPage.login("test@test.test", "Passw0rd");

        await expect($('//span[contains(text(), "Your Basket")]')).toBeExisting();
    });
})




