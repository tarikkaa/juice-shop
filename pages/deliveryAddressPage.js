const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class DeliveryAddressPage extends BasePage {
    baseElement() {return new ViewElement($('div[class*="addressCont"]'),"Base element of the Delivery address page")};
    deliverySpeedRadiobutton(days) {return new WebButton($(`//mat-cell[contains(text(), "${days} Days")]/..//mat-cell/mat-radio-button`), `Radio button of the ${addressName}`)};
    //get backButton() {return new WebButton($('//div/button[1]'), "Back button of the Delivery address page")};
    get continueButton() {return new WebButton($('//div/button[2]'), "Continue button of the Delivery address page")};

    async selectDeliverySpeed(days) {
        await allure.addStep(`Selecting the delivery speed: ${days} Days`)
        await this.deliverySpeedRadiobutton(days).click();
        await this.continueButton.click();
    }
}

module.exports = new DeliveryAddressPage();