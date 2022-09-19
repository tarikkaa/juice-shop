

let WebButton = require("../elements/button.element.js");
let InputElement = require("../elements/input.element.js");
let ViewElement = require("../elements/view.element.js");
let BasePage = require("../pages/basePage.js");

class LoginPage extends BasePage {
   baseElement() {return new ViewElement($('[href="#/register"'), "Login page base element")};
   get email() {return new InputElement($('[id="email"]'), "Email input field on login page")};
   get password() {return new InputElement($('[id="password"]'), "Password input field on login page")};
   get loginButton() {return new WebButton($('[id="loginButton"]'), "Login button on login page")};
   get registrationButton() {return new WebButton($('[href="#/register"'), "Not yet a customer? button")};
   get errorInvalidEmail() {return new ViewElement($('//div[contains(text(), "Invalid email or password.")]'), "Error Invalid Email")};
   get titleLoginWindow() {return new ViewElement($('//h1[text()="Login"]'), "Title of login window")};


   async login(email, passw) {
      await allure.startStep(`Logging in the account with Login:${email} and Password:${passw}`);
      await this.email.setValue(email);
      await this.password.setValue(passw);
      await this.loginButton.click();
      await allure.endStep("passed"); 
   };

   async goToRegistration(){
      await allure.addStep("Going to Registration page");
      await this.registrationButton.waitForClickable();
      await this.registrationButton.click();
   };
}

module.exports = new LoginPage();




