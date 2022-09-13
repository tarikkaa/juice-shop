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
        await browser.url('/');
        await browser.fullscreenWindow();
        await this.closeBannerButton.click();
        
        //await browser.keys("Escape");
    };
    
    async pause(seconds){
        seconds = seconds * 1000; 
        await browser.pause(seconds);
    };
    
    async waitForPageAvailable() {
        await this.baseElement.waitForDisplayed({ timeout: 15000 });
     };
}

module.exports = BasePage;