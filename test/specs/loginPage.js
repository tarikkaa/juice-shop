const { default: $ } = require("webdriverio/build/commands/browser/$");

class LoginPage {
   get accountButtonHome () {return $('[id="navbarAccount"]')};
   get loginButtonHome () {return $('[id="navbarLoginButton"]')};
   get email () {return $('[id="email"]')};
   get password () {return $('[id="password"]')};
   get loginButton () {return $('[id="loginButton"]')};
   
   async openLoginPage () {
    await browser.url('/');
    await browser.keys("Escape");
    await this.accountButtonHome.click();
    await this.loginButtonHome.click();
   }

   async login (email, passw) {
    await this.email.setValue(email);
    await this.password.setValue(passw);
    await this.loginButton.click(); 
   }
    
}

module.exports = new LoginPage();



