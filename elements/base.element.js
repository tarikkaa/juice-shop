class BaseElement {
    constructor(wdioElement, elementName) {
        this.wdioElement = wdioElement;
        this.elementName = elementName;
    }

    async click() {
        console.log(`Clicking on "${this.elementName}"`);
        await this.wdioElement.click();
    }

    async waitForDisplayed() {
        //TODO
    }
}

module.exports = BaseElement