let LoginPage = require('/Users/tar/juice-shop-test/test/specs/loginPage.js');
const { default: $ } = require("webdriverio/build/commands/browser/$");


describe('My login', () => {
    it('Login success', async() => {
        await LoginPage.openLoginPage();
        await LoginPage.login("test@test.com", "Passw0rd");

        await expect($('//span[contains(text(), "Your Basket")]')).toBeExisting();
    })
})

