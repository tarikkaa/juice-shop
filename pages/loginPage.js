class LoginPage {
   get accountButtonHome () {return $('#navbarAccount')};
   get loginButtonHome () {return $('[id="navbarLoginButton"]')};
   get email () {return $('[id="email"]')};
   get password () {return $('[id="password"]')};
   get loginButton () {return $('[id="loginButton"]')};
   
   async open() {
      await browser.url('/');
      await browser.keys("Escape");
     }

   async openLoginPage() {
    await this.accountButtonHome.click();
    await this.loginButtonHome.click();
   }

   async login(email, passw) {
    await this.email.setValue(email);
    await this.password.setValue(passw);
    await this.loginButton.click(); 
   }
    
}

module.exports = new LoginPage();



