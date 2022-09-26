const BaseElement = require("./base.element");

class DropDown extends BaseElement {

    async selectByVisibleText(text) {
        console.log(`Selecting item from ${this.elementName}`);
        await this.wdioElement.selectByVisibleText(text);
        console.log(`Selected ${text}`);
    }

}

module.exports = DropDown;