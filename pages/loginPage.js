let BasePage = require('../pages/basePage.js')

class LoginPage extends BasePage {
   
   get email() {return $('[id="email"]')};
   get password() {return $('[id="password"]')};
   get loginButton() {return $('[id="loginButton"]')};

   async login(email, passw) {
    await this.email.setValue(email);
    await this.password.setValue(passw);
    await this.loginButton.click(); 
   }
}

module.exports = new LoginPage();




