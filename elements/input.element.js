const BaseElement = require("./base.element");

class InputElement extends BaseElement {
    constructor(wdioElement, elementName){
        this.wdioElement = wdioElement;
        this.elementName = elementName;
    }

    async setValue(value){
        console.log(`Enter "${value}" to the "${this.elementName}"`);
        await this.wdioElement.setValue(value);
    };
}

module.exports = InputElement;