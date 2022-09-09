let randomstring = require("randomstring");
let WebButton = require("../elements/button.element.js");
let InputElement = require("../elements/input.element.js");
let ViewElement = require("../elements/view.element.js");
let BasePage = require("../pages/basePage.js");

class Registration extends BasePage {
    
    get emailField() {return new InputElement($("#emailControl"), "Email input field on registration page")};
    get passwordField() {return new InputElement($("#passwordControl"), "Password input field on registration page")};
    get repeatPasswordField() {return new InputElement($("#repeatPasswordControl"), "Repeat Password input field on registration page")};
    get securityQuestionButton(){return new WebButton($("//div[starts-with(@id, 'mat-select-value')]"), "Security question button")};
    get securityQuestion(){return new ViewElement($('//*[contains(text(), "maiden name")]'), "Security question")};
    get securityAnswer(){return new InputElement($("#securityAnswerControl"), "Security answer input field")};
    get registerButton(){return new WebButton($('button[id="registerButton"]'), "Register button on registration page")};
    get errorEmailMustBeUnique() {return new ViewElement($('.error'), "Error: email must be unique")};
    get errorPasswordsDoNotMatch() {return new ViewElement($("//mat-error[contains(text(), 'Passwords')]"), "Error: passwords do not match")};
     
    async registration(login, passw){
        //let passw = this.randomPassword;
        //await this.emailField.setValue(this.randomEmail);
        await this.emailField.setValue(login);
        await this.passwordField.setValue(passw);
        await this.repeatPasswordField.setValue(passw);
        await this.securityQuestionButton.click();
        await this.securityQuestion.click();
        await this.securityAnswer.setValue("mom");
        await this.registerButton.click();
        
    };
}

module.exports = new Registration();