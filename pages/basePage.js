let WebButton = require("../elements/button.element");


class BasePage{
    get closeBannerButton() {return new WebButton($('[aria-label="Close Welcome Banner"'), "Close popup button")};
    get accountButtonHeader() {return new WebButton($('#navbarAccount'), "Account button")};
    get loginButtonHeader() {return new WebButton($('[id="navbarLoginButton"]'), "Login button in account menu")};
    get logoutButtonHeader() {return new WebButton($('#navbarLogoutButton'), "Logout button in account menu")};
    get basketButton() {return new WebButton($('//span[contains(text(), "Your Basket")]'), "Basket button")};

    async open() {
        await browser.url('/');
        await browser.fullscreenWindow();
        await this.closeBannerButton.click();
        
        //await browser.keys("Escape");
     };

    async openLoginPage() {
        await this.accountButtonHeader.click();
        await this.loginButtonHeader.click();
       };

    async logOut() {
        await this.accountButtonHeader.click();
        await this.logoutButtonHeader.click();
    };
}

module.exports = BasePage;