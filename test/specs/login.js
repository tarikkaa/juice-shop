let Registration = require("../../pages/registrationPage.js");
let HomePage = require("../../pages/homePage.js");
let LoginPage = require("../../pages/loginPage.js");
const randomHelper = require("./randomHelper");

let randomEmail = randomHelper.randomString(5, "alphabetic") + "@test.com";
let randomPassword = randomHelper.randomString(8, "alphanumeric") + "!!!";
let wrongEmail = randomEmail + "a";

describe('My login', () => {
    before('Open page', async() => {
      await HomePage.open();
      await HomePage.openLoginPage();
      await LoginPage.goToRegistration();
      await Registration.registration(randomEmail, randomPassword);
    });

    afterEach('LogOut', async() => {
      await HomePage.logOut();
    }); 

    it('Login success', async() => {
      await HomePage.openLoginPage();
      await LoginPage.login(randomEmail, randomPassword);
      await HomePage.waitForPageAvailable();

      chaiExpect(await HomePage.basketButton.isExisting()).to.equal(true);
    });

    it('Login failed: Invalid email', async() => {
      await HomePage.openLoginPage();
      await LoginPage.login(wrongEmail, randomPassword);
      await LoginPage.waitForPageAvailable();

      chaiExpect(await LoginPage.errorInvalidEmail.isDisplayed()).to.equal(true);
    });
})



