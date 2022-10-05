
const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class SelectAddressPage extends BasePage{
    baseElement() {return new ViewElement($('[routerlink="/address/create"]'), "Base element of the Select address page")};
    get addNewAdressButton() {return new WebButton($('[routerlink="/address/create"]'), "Add new address button")};
    addressRadiobutton(addressName) {return new WebButton($(`//mat-cell[contains(text(), "${addressName}")]/..//mat-cell/mat-radio-button`), `Radio button of the ${addressName}`)};
    get continueButton() {return new WebButton($('div[class="ng-star-inserted"] button'), "Continue button")};

    async addNewAddress() {
        await allure.addStep("Going to the Add address page");
        await this.addNewAdressButton.click();
    }

    async selectAddressAndContinue(addressName) {
        await allure.addStep(`Selecting the address ${addressName} and continue`);
        await this.addressRadiobutton(addressName).click();
        await this.continueButton.click();
    }
}

module.exports = new SelectAddressPage();