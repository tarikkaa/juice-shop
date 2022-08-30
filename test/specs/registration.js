

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");

describe('User registration', () => {
    it('Registration successful', async () => {
        await Registration.open();
        await Registration.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration("test1@test.test", "Passw0rd1");

        await expect($('//h1[text()="Login"]')).toBeExisting();
    })
})




