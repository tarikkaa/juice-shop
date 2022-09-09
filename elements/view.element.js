const BaseElement = require("./base.element");

class ViewElement extends BaseElement {
    constructor(wdioElement, elementName){
        this.wdioElement = wdioElement;
        this.elementName = elementName;
    };

    async getText() {
        console.log(`Getting text of the "${this.elementName}"`);
        let text = await this.wdioElement.getText();
        console.log(`The text is "${text}"`);
    };
}

module.exports = ViewElement;