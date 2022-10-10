const WebButton = require("../elements/button.element");
const InputElement = require("../elements/input.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class AddAddressPage extends BasePage{
    baseElement() {return new ViewElement($('#address'), "Base element of the Add address page")}
    get submitButton() {return new WebButton($('button[id="submitButton"]'), "Submit button")};
    get countryField() {return new InputElement($('input[placeholder*="country"]'), "Country input field")};
    get nameField() {return new InputElement($('input[placeholder*="name"]'), "Name input field")};
    get mobileNumberField() {return new InputElement($('input[placeholder*="number"]'), "Mobile number input field")};
    get zipCodeField() {return new InputElement($('input[placeholder*="ZIP"]'), "ZIP code input field")};
    get cityField() {return new InputElement($('input[placeholder*="city"]'), "City input field")};
    get stateField() {return new InputElement($('input[placeholder*="state"]'), "State input field")};
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
    };
};

module.exports = new AddAddressPage();