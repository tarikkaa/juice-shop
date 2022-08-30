let LoginPage = require("../../pages/loginPage");


describe('My login', () => {
    it('Login success', async() => {
        await LoginPage.open();
        await LoginPage.openLoginPage();
        await LoginPage.login("test@test.com", "Passw0rd");

        await expect($('//span[contains(text(), "Your Basket")]')).toBeExisting();
    })
})



