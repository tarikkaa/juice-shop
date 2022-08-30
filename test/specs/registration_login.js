

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");

describe('User registration', () => {
    it('Registration successful', async () => {
        await Registration.open();
        await Registration.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration("test4@test.test", "Passw0rd4");
        await LoginPage.login("test4@test.test", "Passw0rd4");

        await expect($('//span[contains(text(), "Your Basket")]')).toBeExisting();
    })
})




