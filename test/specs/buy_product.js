const digitalWalletPage = require("../../pages/digitalWalletPage");
const digitalWalletPaymentPage = require("../../pages/digitalWalletPaymentPage");
const HomePage = require("../../pages/homePage");
const LoginPage = require("../../pages/loginPage");
let Registration = require("../../pages/registrationPage.js");
let randomstring = require("randomstring");
const basketPage = require("../../pages/basketPage");
const selectAddressPage = require("../../pages/selectAddressPage");
const addAddressPage = require("../../pages/addAddressPage");
const { waitForPageAvailable } = require("../../pages/digitalWalletPage");
const deliveryAddressPage = require("../../pages/deliveryAddressPage");
const myPaymentOptionsPage = require("../../pages/myPaymentOptionsPage");
const orderSummaryPage = require("../../pages/orderSummaryPage");

let randomEmail = randomstring.generate({
    length: 5,
    charset: "alphabetic"
}) + "@test.com";

let randomPassword = randomstring.generate({
    length: 8,
    charset: "alphanumeric"
}) + "!!!";

let country = randomstring.generate({
    length: 7,
    charset: "aphabetic"
});

let name = randomstring.generate({
    length: 4,
    charset: "aphabetic"
});

let number = randomstring.generate({
    length: 10,
    charset: "numeric"
});

let zip = randomstring.generate({
    length: 6,
    charset: "aphanumeric"
});

let city = randomstring.generate({
    length: 6,
    charset: "aphabetic"
});

let address = randomstring.generate({
    length: 5,
    charset: "aphabetic"
});

let state = randomstring.generate({
    length: 7,
    charset: "aphabetic"
});

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
  };

let cardMonth = random(1, 12);
let cardYear = random(2080, 2099);
let days = random(1, 3);
let item = HomePage.addToBasketButton("Melon Bike");


describe("Shop cases", () => {

    before('Open page', async() => {
        await HomePage.open();
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.login(randomEmail, randomPassword);
        await HomePage.waitForPageAvailable();
    });
    
    it('Add a card and buy a product', async() => {
        await HomePage.scrollIntoView(item);
        await HomePage.addToBasket("Melon Bike");
        await HomePage.goToBasket();
        await basketPage.waitForPageAvailable();
        await basketPage.checkout();
        await selectAddressPage.waitForPageAvailable();
        await selectAddressPage.addNewAddress();
        await addAddressPage.waitForPageAvailable();
        await addAddressPage.addAddress(country, name, number, zip, city, address, state);
        await selectAddressPage.waitForPageAvailable();
        await selectAddressPage.selectAddressAndContinue(name);
        await deliveryAddressPage.waitForPageAvailable();
        await deliveryAddressPage.selectDeliverySpeed(days);
        await myPaymentOptionsPage.waitForPageAvailable();
        await myPaymentOptionsPage.addNewCard(cardName, cardNumber, cardMonth, cardYear);
        await myPaymentOptionsPage.selectCardAndProceed(cardName);
        await orderSummaryPage.waitForPageAvailable();
        await orderSummaryPage.placeOrderAndPay();

    });
});