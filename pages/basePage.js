let WebButton = require("../elements/button.element");


class BasePage{
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
    
}

module.exports = BasePage;