const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class DeliveryAddressPage extends BasePage {
    baseElement() {return new ViewElement($('svg[data-icon="rocket"]'),"Base element of the Delivery address page")};
    deliverySpeedRadiobutton(speed) {return new WebButton($(`//*[@data-icon="${speed}"]/../..//mat-radio-button`), `Radio button of the ${speed} delivery speed`)};
    get continueButton() {return new WebButton($('button[mat-raised-button]'), "Continue button of the Delivery address page")};

    async selectDeliverySpeed(speed) {
        await allure.addStep(`Selecting the delivery speed: ${speed}`)
        await this.deliverySpeedRadiobutton(speed).click();
        await this.continueButton.click();
    };
};

module.exports = new DeliveryAddressPage();