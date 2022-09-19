
let WebButton = require("../elements/button.element");



class BasePage{
    constructor() {
        if (this.baseElement === undefined) {
            throw new TypeError("baseElement() must be defined in "
                + this.constructor.name + " and should return base screen element");
        }
    }
    get closeBannerButton() {return new WebButton($('[aria-label="Close Welcome Banner"'), "Close popup button")};
    

    async open() {
        await allure.addStep("Opening base page")
        await browser.url('/');
        await browser.maximizeWindow();
        await this.closeBannerButton.click();
        
        //await browser.keys("Escape");
    };
    
    async pause(seconds){
        await allure.addStep(`Browser pause for ${seconds} seconds`);
        seconds = seconds * 1000; 
        await browser.pause(seconds);
    };
    
    async waitForPageAvailable() {
        await allure.startStep(`Waiting until page is displayed`);
        await this.baseElement().waitForDisplayed({ timeout: 15000 });
        await allure.endStep(`passed`);
     };

     async switchWindow(title_or_url) {
        await allure.startStep(`Browser is switching window`);
        await browser.switchWindow(title_or_url);
        await browser.maximizeWindow();
        await allure.endStep(`passed`);
     };
}

module.exports = BasePage;