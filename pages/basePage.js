
class BasePage{
    get closeBannerButton() {return $('[aria-label="Close Welcome Banner"')};
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