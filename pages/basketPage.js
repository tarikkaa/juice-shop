const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class BasketPage extends BasePage{
    baseElement() {return new ViewElement($('button#checkoutButton'), "Base element of the Basket page")}
    get checkoutButton() {return new WebButton($('button#checkoutButton'), "Checkout button")};
    deleteItemButton(item) {return new WebButton($(`//mat-cell[contains(text(), "${item}")]/following::*[@data-icon="trash-alt"][1]`), `Delete ${item} from basket button`)}
    
    async checkout() {
        await allure.addStep("Basket > checkout");
        await this.checkoutButton.click();
    };

    async deleteItem(item) {
        await allure.addStep(`Deleting the ${item} from basket`);
        await this.deleteItemButton(item).click();
    };
};

module.exports = new BasketPage();