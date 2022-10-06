const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class BasketPage extends BasePage{
    baseElement() {return new ViewElement($('[data-icon="cart-arrow-down"]'), "Base element of the Basket page")}
    get checkoutButton() {return new WebButton($('[data-icon="cart-arrow-down"]'), "Checkout button")};
    
    async checkout() {
        await allure.addStep("Basket > checkout");
        await this.checkoutButton.click();
    };
}

module.exports = new BasketPage();