let BasePage = require("./basePage");
let WebButton = require("../elements/button.element");
let ViewElement = require("../elements/view.element");


class HomePage extends BasePage {
    baseElement() {return new ViewElement($('#navbarAccount'), "Home page base element")};
    get accountButtonHeader() {return new WebButton($('#navbarAccount'), "Account button")};
    get ordersAndPaymentsButton() {return new WebButton($('//div[@tabindex="-1"]/div/button[2]'), "Orders&Payments button")};
    get digitalWalletButton() {return new WebButton($('button[routerlink="/wallet"]'), "Digital Wallet button")};
    get loginButtonHeader() {return new WebButton($('[id="navbarLoginButton"]'), "Login button in account menu")};
    get logoutButtonHeader() {return new WebButton($('#navbarLogoutButton'), "Logout button in account menu")};
    get basketButton() {return new WebButton($('button[routerlink="/basket"]'), "Basket button")};
    get burgerButton() {return new WebButton($('//mat-toolbar-row/button[1]'), "Burger button")};
    get aboutUsButton() {return new WebButton($('a[routerlink="/about"]'), "About Us button")};
    itemInShop(item) {return new ViewElement($(`//div[contains(text(), "${item}")]`), `Item in the shop: ${item}`)};
    addToBasketButton(item) {return new WebButton($(`//div[contains(text(), "${item}")]/following::button[1]`), "Add to basket button")};
    

    async openLoginPage() {
        await allure.addStep('Opening Login page');
        await this.accountButtonHeader.click();
        await this.loginButtonHeader.click();
    };

    async logOut() {
        await allure.addStep('Logging out from Juice shop');
        await this.accountButtonHeader.click();

        if(await this.logoutButtonHeader.isExisting()){
            this.logoutButtonHeader.click();
        }else{this.loginButtonHeader.click()}
    };

    async goToAboutUspage(){
        await allure.addStep('Going to About Us page');
        await this.burgerButton.click();
        await this.aboutUsButton.waitForClickable();
        await this.aboutUsButton.click();
    };

    async goToWalletPage() {
        await allure.addStep('Going to Digital Wallet page');
        await this.accountButtonHeader.click();
        await this.ordersAndPaymentsButton.waitForExist();
        await this.ordersAndPaymentsButton.click();
        await this.digitalWalletButton.waitForExist();
        await this.digitalWalletButton.click();
    };

    async addToBasket(item) {
        await allure.addStep(`Adding to basket item: ${item}`);
        await this.addToBasketButton(item).click();
    };

    async goToBasket() {
        await allure.addStep("Going to basket");
        await this.basketButton.click();
    };
};

module.exports = new HomePage();