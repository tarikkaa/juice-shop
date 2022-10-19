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
        console.log(`Waitinting for "${this.elementName}" is clickable`);
        await this.wdioElement.waitForClickable();
    };

    async waitForEnabled() {
        console.log(`Waiinting for "${this.elementName}" is enabled`);
        await this.wdioElement.waitForEnabled({timeout: 10000});
    };

    async waitForExist() {
        console.log(`Waiinting for "${this.elementName}" exists`);
        await this.wdioElement.waitForExist({timeout: 10000});
    };
}

module.exports = BaseElement;