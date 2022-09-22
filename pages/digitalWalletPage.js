
const WebButton = require("../elements/button.element");
const DropDown = require("../elements/dropdown.element");
const InputElement = require("../elements/input.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class DigitalWalletPage extends BasePage {
    baseElement() {return new ViewElement($('input[type="number"]'), "Diginal Wallet page Base element")};
    get amountInputField() {return new InputElement($('input[type="number"]'), "Amount input field")};
    get continueButton() {return new WebButton($('[id="submitButton"]'), "Continue button")};
    get walletBalance() {return new ViewElement($(".confirmation"), "Wallet balance")};

    async addMoneyAndContinue(amount) {
        await allure.addStep(`Entering ${amount}$ for adding to a card and going to Payment Options page`)
        await this.amountInputField.setValue(amount);
        await this.continueButton.click();
    };

    async getWalletBalance() {
        await allure.addStep('Getting wallet balance');
        return await this.walletBalance.getText();
    }
}


module.exports = new DigitalWalletPage();