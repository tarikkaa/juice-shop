let BaseElement = require("./base.element");

class WebButton extends BaseElement {
    async isClickable() {
        console.log(`Element ${this.elementName} is clickable`);
        return await this.wdioElement.isClickable();
    };

}

module.exports = WebButton;