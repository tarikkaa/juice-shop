class BaseElement {
    constructor(wdioElement, elementName) {
        this.wdioElement = wdioElement;
        this.elementName = elementName;
    }

    async click() {
        console.log(`Clicking on "${this.elementName}"`);
        await this.wdioElement.click();
    };

    async waitForDisplayed({ timeout, reverse, timeoutMsg, interval } = {}) {
        console.log(`Waiinting for "${this.elementName}" displayed`);
        await this.wdioElement.waitForDisplayed({ timeout, reverse, timeoutMsg, interval });
    };

    async isDisplayed() {
        console.log(`Element "${this.elementName}" is displayed`);
        return await this.wdioElement.isDisplayed();
    };

    async isExisting() {
        console.log(`Element "${this.elementName}" is existing`);
        return await this.wdioElement.isExisting();
    };

    async waitForClickable() {
        console.log(`Waiinting for "${this.elementName}" is clickable`);
        await this.wdioElement.waitForClickable();
    };
}

module.exports = BaseElement