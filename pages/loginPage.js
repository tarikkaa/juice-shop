
let BasePage = require("../pages/basePage.js")

class LoginPage extends BasePage {
   
   get email() {return $('[id="email"]')};
   get password() {return $('[id="password"]')};
   get loginButton() {return $('[id="loginButton"]')};
   get registrationButton() {return $('[href="#/register"')};
   get baseElement() {return $('[href="#/register"')};
   get errorInvalidEmail() {return $('//div[contains(text(), "Invalid email or password.")]')};
   get titleLoginWindow() {return $('//h1[text()="Login"]')};

   async login(email, passw) {
    await this.email.setValue(email);
    await this.password.setValue(passw);
    await this.loginButton.click(); 
   };

   async goToRegistration(){
      await this.registrationButton.waitForClickable();
      await this.registrationButton.click();
   };

   async waitForPageAvailable() {
      await this.baseElement().waitForDisplayed();
   }
}

module.exports = new LoginPage();




