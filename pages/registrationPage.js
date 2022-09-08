let BasePage = require("../pages/basePage.js")

class Registration extends BasePage {
    get emailField() {return $("#emailControl")};
    get passwordField() {return $("#passwordControl")};
    get repeatPasswordField() {return $("#repeatPasswordControl")};
    get securityQuestionButton(){return $("//div[starts-with(@id, 'mat-select-value')]")};
    get securityQuestion(){return $('//*[contains(text(), "maiden name")]')};
    get securityAnswer(){return $("#securityAnswerControl")};
    get registerButton(){return $('button[id="registerButton"]')};
    get errorEmailMustBeUnique() {return $('.error')};
    get errorPasswordsDoNotMatch() {return $("//mat-error[contains(text(), 'Passwords')]")};

    async registration(email, password){
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.repeatPasswordField.setValue(password);
        await this.securityQuestionButton.click();
        await this.securityQuestion.click();
        await this.securityAnswer.setValue("mom");
        await this.registerButton.click();
    }
}

module.exports = new Registration();