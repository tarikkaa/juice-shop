const digitalWalletPage = require("../../pages/digitalWalletPage");
const digitalWalletPaymentPage = require("../../pages/digitalWalletPaymentPage");
const HomePage = require("../../pages/homePage");
const LoginPage = require("../../pages/loginPage");
let Registration = require("../../pages/registrationPage.js");
const randomHelper = require("./randomHelper");

let randomEmail = randomHelper.randomString(5, "alphabetic") + "@test.com";
let randomPassword = randomHelper.randomString(8, "alphanumeric") + "!!!";
let cardName = randomHelper.randomString(10, "aphabetic");
let cardNumber = randomHelper.randomString(16, "123456789");
let cardMonth = randomHelper.randomNumber(1, 12);
let cardYear = randomHelper.randomNumber(2080, 2099);

describe("Wallet cases", () => {

    before('Open page', async() => {
        await HomePage.open();
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.login(randomEmail, randomPassword);
        await HomePage.waitForPageAvailable();
      });

    it("Add money to a new card and check the added sum", async() => {
        await HomePage.goToWalletPage();
        await digitalWalletPage.waitForPageAvailable();
        let cardStartAmount = await digitalWalletPage.getWalletBalance();
        let money = 500;
        await digitalWalletPage.addMoneyAndContinue(money);
        await digitalWalletPaymentPage.waitForPageAvailable();
        await digitalWalletPaymentPage.addNewCard(cardName, cardNumber, cardMonth, cardYear);
        await digitalWalletPaymentPage.selectCard(cardName);
        await digitalWalletPaymentPage.continueButton.click();
        let cardEndAmount = await digitalWalletPage.getWalletBalance();
        chaiExpect(cardEndAmount - cardStartAmount).to.equal(money);
        
    });

    it("Add money to existing card", async () => {
        await HomePage.goToWalletPage();
        await digitalWalletPage.waitForPageAvailable();
        let cardStartAmount = await digitalWalletPage.getWalletBalance();
        let money = 735;
        await digitalWalletPage.addMoneyAndContinue(money);
        await digitalWalletPaymentPage.waitForPageAvailable();
        await digitalWalletPaymentPage.selectCard(cardName);
        await digitalWalletPaymentPage.continueButton.click();
        let cardEndAmount = await digitalWalletPage.getWalletBalance();
        chaiExpect(cardEndAmount - cardStartAmount).to.equal(money);

    });
});
