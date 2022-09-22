const BasePage = require("./basePage");
const WebButton = require("../elements/button.element");
const DropDown = require("../elements/dropdown.element");
const InputElement = require("../elements/input.element");
const ViewElement = require("../elements/view.element");


class DigitalWalletPaymentPage extends BasePage {
    baseElement() {return new ViewElement($('mat-expansion-panel-header[role="button"]'), "Diginal Wallet Payment Options page Base element")};
    get addNewCardButton() {return new WebButton($('mat-expansion-panel-header[role="button"]'), "Add new card button")};
    get cardNameInputField() {return new InputElement($('//input[@aria-required="true" and @type="text"]'), "Card name input field")};
    get cardNumberInputField() {return new InputElement($('input[type="number"]'), "Card number input field")};
    get expiryMonthDropdown() {return new DropDown($('//option[@value="1"]/..'), "Expiry month dropdown")};
    get expiryYearDropdown() {return new DropDown($('//option[@value="2080"]/..'), "Expiry year dropdown")};
    get submitButton() {return new WebButton($('[id="submitButton"]'), "Submit button")};
    get backButton() {return new WebButton($('//mat-icon[text()=" navigate_before "]'), "Back button")};
    get continueButton() {return new WebButton($('//mat-icon[text()=" navigate_next "]'), "Continue button")};
    get cardNameColumn() {return new ViewElement($('[class="mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted"]'), "Card name column")};
    cardRowRadio(cardName) {return new WebButton($(`//mat-cell[text()="${cardName}"]/../mat-cell/mat-radio-button`), "Card row")};

    async selectCard(cardName){
        await allure.addStep(`Selecting card with name "${cardName}"`);
        await this.cardRowRadio(cardName).click();
    }

    async addNewCard(name, number, month, year) {
        await allure.addStep(`Adding a new card with name:"${name}", number:"${number}"`);
        await this.addNewCardButton.click();
        await this.cardNameInputField.setValue(name);
        await this.cardNumberInputField.setValue(number);
        await this.expiryMonthDropdown.selectByVisibleText(month);
        await this.expiryYearDropdown.selectByVisibleText(year);
        await this.submitButton.click()
    }

}

module.exports = new DigitalWalletPaymentPage();

