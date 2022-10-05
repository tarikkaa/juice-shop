const WebButton = require("../elements/button.element");
const InputElement = require("../elements/input.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class AddAddressPage extends BasePage{
    baseElement() {return new ViewElement($('(//div/mat-card//input)[1]'), "Base element of the Add address page")}
    get submitButton() {return new WebButton($('(//div/mat-card//button)[2]'), "Submit button")};
    get backButton() {return new WebButton($('(//div/mat-card//button)[1]'), "Back button")};
    get countryField() {return new InputElement($('(//div/mat-card//input)[1]'), "Country input field")};
    get nameField() {return new InputElement($('(//div/mat-card//input)[2]'), "Name input field")};
    get mobileNumberField() {return new InputElement($('(//div/mat-card//input)[3]'), "Mobile number input field")};
    get zipCodeField() {return new InputElement($('(//div/mat-card//input)[4]'), "ZIP code input field")};
    get cityField() {return new InputElement($('(//div/mat-card//input)[5]'), "City input field")};
    get stateField() {return new InputElement($('(//div/mat-card//input)[6]'), "State input field")};
    get addressField() {return new InputElement($('#address'), "Address input field")};

    async addAddress(country, name, number, zip, city, address, state) {
        await allure.addStep(`Creating a new address with the name: ${name}`);
        await this.countryField.setValue(country);
        await this.nameField.setValue(name);
        await this.mobileNumberField.setValue(number);
        await this.zipCodeField.setValue(zip);
        await this.cityField.setValue(city);
        await this.addressField.setValue(address);
        await this.stateField.setValue(state);
        await this.submitButton.click();
    }
}

module.exports = new AddAddressPage();