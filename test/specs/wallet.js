const digitalWalletPage = require("../../pages/digitalWalletPage");
const digitalWalletPaymentPage = require("../../pages/digitalWalletPaymentPage");
const HomePage = require("../../pages/homePage");
const LoginPage = require("../../pages/loginPage");
let Registration = require("../../pages/registrationPage.js");
let randomstring = require("randomstring");

let randomEmail = randomstring.generate({
    length: 5,
    charset: "alphabetic"
}) + "@test.com";

let randomPassword = randomstring.generate({
    length: 8,
    charset: "alphanumeric"
}) + "!!!";

let cardName = randomstring.generate({
    length: 10,
    charset: "aphabetic"
});

let cardNumber = randomstring.generate({
    length: 16,
    charset: "numeric"
});

function random(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

let cardMonth = random(1, 12);
let cardYear = random(2080, 2099);

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
        await digitalWalletPaymentPage.addNewCard(cardName, cardNumber, cardMonth, "2084");
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
})
