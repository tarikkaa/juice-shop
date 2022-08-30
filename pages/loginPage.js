
let BasePage = require("../pages/basePage.js")

class LoginPage extends BasePage {
   
   get email() {return $('[id="email"]')};
   get password() {return $('[id="password"]')};
   get loginButton() {return $('[id="loginButton"]')};
   get registrationButton() {return $('[href="#/register"')};

   async login(email, passw) {
    await this.email.setValue(email);
    await this.password.setValue(passw);
    await this.loginButton.click(); 
   };

   async goToRegistration(){
      await this.registrationButton.waitForClickable();
      await this.registrationButton.click();
   };
}

module.exports = new LoginPage();




