const BaseElement = require("./base.element");

class ViewElement extends BaseElement {

    async getText() {
        console.log(`Getting text of the "${this.elementName}"`);
        let text = await this.wdioElement.getText();
        console.log(`The text is "${text}"`);
        return text;
    };
}

module.exports = ViewElement;