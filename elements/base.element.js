class BaseElement {
    constructor(wdioElement, elementName) {
        this.wdioElement = wdioElement;
        this.elementName = elementName;
    }

    async click() {
        console.log(`Clicking on "${this.elementName}"`);
        await this.wdioElement.click();
    };

    async waitForDisplayed() {
        console.log(`Waiinting for "${this.elementName}" displayed`);
        await this.wdioElement.waitForDisplayed({ timeout: 7000 });
    };

    async isDisplayed() {
        console.log(`Element "${this.elementName}" is displayed`);
        return await this.wdioElement.isDisplayed();
    };

    async waitForClickable() {
        console.log(`Waiinting for "${this.elementName}" is clickable`);
        await this.wdioElement.waitForClickable({ timeout: 7000});
    };
}

module.exports = BaseElement