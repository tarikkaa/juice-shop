const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class OrderSummaryPage extends BasePage {
    baseElement() {return new ViewElement($('//mat-card/button'), "Base element of the Order summary page")};
    get placeOrederAndPayButton() {return new WebButton($('//mat-card/button'), "Place order and pay button")};

    async placeOrderAndPay() {
        await allure.addStep("Placing order and pay");
        await this.placeOrderAndPay.click();
    };
}

module.exports = new OrderSummaryPage();