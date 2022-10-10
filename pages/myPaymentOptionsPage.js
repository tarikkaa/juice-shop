const WebButton = require("../elements/button.element");
const DropDown = require("../elements/dropdown.element");
const InputElement = require("../elements/input.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class MyPaymentOptionsPage extends BasePage {
    baseElement() {return new ViewElement($('//mat-icon[contains(text(), " navigate_before ")]'), "Continue button")};
    cardRadiobutton(cardName) {return new WebButton($(`//mat-cell[contains(text(), "${cardName}")]/..//mat-cell/mat-radio-button`), `Radio button of the card ${cardName}`)};
    get continueButton() {return new WebButton($('//mat-icon[contains(text(), " navigate_next ")]'), "Continue button")};
    //get backButton() {return new WebButton($('//mat-icon[contains(text(), " navigate_before ")]'), "Continue button")};
    get addNewCardButton() {return new WebButton($('#mat-expansion-panel-header-0'), "Add new card button")};
    get cardNameField() {return new InputElement($('//input[@aria-required="true" and @type="text"]'), "Card name field")};
    get cardNumberField() {return new InputElement($('input[type="number"]'), "Card number field")};
    get cardMonthField() {return new DropDown($('//option[@value="1"]/..'), "Card expirity month drop down")};
    get cardYearField() {return new DropDown($('//option[@value="2080"]/..'), "Card expirity year drop down")};
    get submitButton() {return new WebButton($('[id="submitButton"]'), "Submit button")};

    async addNewCard(name, number, month, year){
        await allure.addStep("Adding a new card");
        await this.addNewCardButton.click();
        await this.cardNameField.setValue(name);
        await this.cardNumberField.setValue(number);
        await this.cardMonthField.selectByVisibleText(month);
        await this.cardYearField.selectByVisibleText(year);
        await this.submitButton.click();
    };


    async selectCardAndProceed(cardName) {
        await allure.addStep(`Selecting the card: ${cardName}`);
        await this.cardRadiobutton(cardName).click();
        await this.continueButton.click();

    };
} 

module.exports = new MyPaymentOptionsPage();