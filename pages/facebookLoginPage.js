const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");
const InputElement = require("../elements/input.element");

class FacebookLoginPage extends BasePage{
    facebookURL = "https://www.facebook.com/owasp.juiceshop";
    baseElement() {return new ViewElement($('a[aria-label="Facebook"'), "Facebook login page base element")};
    get loginButton() {return new WebButton($('div[aria-label="Accessible login button"'), "Facebook Login button")};
    get emailField() {return new InputElement($('input[name="email"'), "Email or Phone input field")};
    get passwordField() {return new InputElement($('input[name="pass"'), "Password input field")};

    

    async login(email, password) {
        await allure.startStep(`Loggin in Facebook account with Login:${email}, and Password:${password}`);
        await this.emailField.setValue(email);                       
        await this.passwordField.setValue(password);                    
        await this.loginButton.click();
        await allure.endStep(`passed`);
    };
}

module.exports = new FacebookLoginPage();