let WebButton = require("../elements/button.element");

class BasePage{
    get closeBannerButton() {return new WebButton($('[aria-label="Close Welcome Banner"'), "Close popup button")};
    get accountButtonHeader() {return $('#navbarAccount')};
    get loginButtonHeader() {return $('[id="navbarLoginButton"]')};
    get logoutButtonHeader() {return $('#navbarLogoutButton')};

    async open() {
        await browser.url('/');
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
    }
}

module.exports = BasePage;