

let Registration = require("../../pages/registrationPage.js");
let LoginPage = require("../../pages/loginPage.js");
let HomePage = require("../../pages/homePage.js");
const randomHelper = require("./randomHelper");

let randomEmail = randomHelper.randomString(5, "alphabetic") + "@test.com";
let randomPassword = randomHelper.randomString(8, "alphanumeric") + "!!!";

describe('User registration', () => {
    before('Open page', async() => {
        await HomePage.open();
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
      });
    it('Registration and login successful', async () => {
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.login(randomEmail, randomPassword);
        await HomePage.waitForPageAvailable();

        chaiExpect(await HomePage.basketButton.isExisting()).to.equal(true);
    });
});




