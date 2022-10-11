const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class OrderSummaryPage extends BasePage {
    baseElement() {return new ViewElement($('button[id="checkoutButton"]'), "Base element of the Order summary page")};
    get placeOrederAndPayButton() {return new WebButton($('button[id="checkoutButton"]'), "Place order and pay button")};

    async placeOrderAndPay() {
        await allure.addStep("Placing order and pay");
        await this.placeOrederAndPayButton.click();
    };
}

module.exports = new OrderSummaryPage();