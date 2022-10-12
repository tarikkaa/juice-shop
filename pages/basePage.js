
let WebButton = require("../elements/button.element");



class BasePage{
    constructor() {
        if (this.baseElement === undefined) {
            throw new TypeError("baseElement() must be defined in "
                + this.constructor.name + " and should return base screen element");
        }
    }
    get closeBannerButton() {return new WebButton($('[aria-label="Close Welcome Banner"'), "Close popup button")};
    get homepageButton() {return new WebButton($('button[aria-label="Back to homepage"]'), "Homepage button")};

    

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
        await allure.addStep(`Waiting until page is displayed`);
        await this.baseElement().waitForDisplayed({ timeout: 15000 });
        
     };

     async switchWindow(title_or_url) {
        await allure.addStep(`Browser is switching window`);
        await browser.switchWindow(title_or_url);
        await browser.maximizeWindow();
     };

     async goToHomepage() {
        await allure.addStep("Going to Homepage");
        await this.homepageButton.click();
     };

     async refreshThePage() {
        await allure.addStep("Refreshing the page");
        await browser.refresh();
     };

}

module.exports = BasePage;