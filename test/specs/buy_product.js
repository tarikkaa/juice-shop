
const HomePage = require("../../pages/homePage");
const LoginPage = require("../../pages/loginPage");
let Registration = require("../../pages/registrationPage.js");
const basketPage = require("../../pages/basketPage");
const selectAddressPage = require("../../pages/selectAddressPage");
const addAddressPage = require("../../pages/addAddressPage");
const deliveryAddressPage = require("../../pages/deliveryAddressPage");
const myPaymentOptionsPage = require("../../pages/myPaymentOptionsPage");
const orderSummaryPage = require("../../pages/orderSummaryPage");
const randomHelper = require("./randomHelper");
const orderCompletionPage = require("../../pages/orderCompletionPage");


let randomEmail = randomHelper.randomString(5, "alphabetic") + "@test.com";
let randomPassword = randomHelper.randomString(8, "alphanumeric") + "!!!";
let country = randomHelper.randomString(7, "aphabetic");
let name = randomHelper.randomString(4, "aphabetic");
let number = randomHelper.randomString(10, "numeric");
let zip = randomHelper.randomString(6, "aphanumeric");
let city = randomHelper.randomString(6, "aphabetic");
let address = randomHelper.randomString(5, "aphabetic")
let state = randomHelper.randomString(7, "aphabetic")
let cardName = randomHelper.randomString(10, "aphabetic");
let cardNumber = randomHelper.randomString(16, "123456789");
let cardMonth = randomHelper.randomNumber(1, 12);
let cardYear = randomHelper.randomNumber(2080, 2099);
let deliverySpeed = randomHelper.randomFromList(["rocket","shipping-fast","truck"]);
let item = "Apple Juice (1000ml)";
let item2 = " Apple Pomace ";


describe("Shop cases", () => {

    beforeEach('Open page', async() => {
        await HomePage.open();
        await HomePage.openLoginPage();
        await LoginPage.goToRegistration();
        await Registration.registration(randomEmail, randomPassword);
        await LoginPage.login(randomEmail, randomPassword);
        await HomePage.waitForPageAvailable();
    });
    
    it('Add a card/address and buy a product', async() => {
        await HomePage.itemInShop(item).scrollIntoView();
        await HomePage.addToBasket(item);
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
        await deliveryAddressPage.selectDeliverySpeed(deliverySpeed);
        await myPaymentOptionsPage.waitForPageAvailable();
        await myPaymentOptionsPage.addNewCard(cardName, cardNumber, cardMonth, cardYear);
        await myPaymentOptionsPage.selectCardAndProceed(cardName);
        await orderSummaryPage.waitForPageAvailable();
        await orderSummaryPage.placeOrderAndPay();
        await orderCompletionPage.waitForPageAvailable();
        chaiExpect(await orderCompletionPage.getPageTitle()).to.equal("Thank you for your purchase!");
    });

    it.only("Adding and deleting items from the basket", async() => {
        await HomePage.addToBasket(item);
        await HomePage.addToBasket(item2);
        await HomePage.goToBasket();
        await basketPage.waitForPageAvailable();
        await basketPage.deleteItem(item);
        await basketPage.deleteItem(item2);
        chaiExpect(await basketPage.checkoutButton.isClickable()).to.equal(false);
    });
});