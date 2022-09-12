let Registration = require("../../pages/registrationPage.js");
let HomePage = require("../../pages/homePage.js");
let LoginPage = require("../../pages/loginPage.js");
let randomstring = require("randomstring");

let randomEmail = randomstring.generate({
  length: 5,
  charset: "alphabetic"
}) + "@test.com";

let randomPassword = randomstring.generate({
  length: 8,
  charset: "alphanumeric"
}) + "!!!";

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
      await HomePage.pause(3);

      chaiExpect(await HomePage.basketButton.isExisting()).to.equal(true);
    });

    it('Login failed: Invalid email', async() => {
      await HomePage.openLoginPage();
      await LoginPage.login(wrongEmail, randomPassword);
      await LoginPage.pause(2);

      chaiExpect(await LoginPage.errorInvalidEmail.isDisplayed()).to.equal(true);
    });
})



