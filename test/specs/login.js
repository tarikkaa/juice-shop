
let LoginPage = require("../../pages/loginPage.js");


describe('My login', () => {
    before('Open page', function() {
        LoginPage.open();
      });
      afterEach('LogOut', function() {
        LoginPage.logOut();
      });
    it('Login success', async() => {
        //await LoginPage.open();
        await LoginPage.openLoginPage();
        await LoginPage.login("test@test.com", "Passw0rd");

        await expect($('//span[contains(text(), "Your Basket")]')).toBeExisting();
    });

    it ('Login failed: Invalid email', async() => {
        //await LoginPage.open();
        await LoginPage.openLoginPage();
        await LoginPage.login("t1est@test.com", "Passw0rd");

        await expect($('//div[contains(text(), "Invalid email or password.")]')).toBeDisplayed();
    });

})



