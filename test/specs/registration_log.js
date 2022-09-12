

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");
let HomePage = require("../../pages/homePage.js");
let randomstring = require("randomstring");

let randomEmail = randomstring.generate({
    length: 5,
    charset: "alphabetic"
}) + "@test.com";

let randomPassword = randomstring.generate({
    length: 8,
    charset: "alphanumeric"
}) + "!!!";

describe('User registration', () => {
    before('Open page', async() => {
        await HomePage.open();
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
      });
    it('Registration and login successful', async () => {
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.login(randomEmail, randomPassword);
        await HomePage.pause(3);

        chaiExpect(await HomePage.basketButton.isExisting()).to.equal(true);
    });
})




