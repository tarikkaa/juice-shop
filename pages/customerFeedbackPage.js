

const SliderElement = require("../elements/slider.element");
const ViewElement = require("../elements/view.element");
const InputElement = require("../elements/input.element");
const BasePage = require("./basePage");
const WebButton = require("../elements/button.element");

class CustomerFeedbackPage extends BasePage {
    baseElement() {return new ViewElement($("#feedback-form"), "Base element of the Customer Feedback form")};
    get sliderToggle() {return new SliderElement($("span.mat-slider-thumb-label-text"), "Slider toggle")};
    get captchaQuestion() {return new ViewElement($('#captcha'), "Captcha question")};
    get captchaResultField() {return new InputElement($('#captchaControl'), "Captcha input field")};
    get commentField() {return new InputElement($('#comment'), "Comment input field")};
    get submitButton() {return new WebButton($('button#submitButton'), "Submit button")};
    get captchaResultPopup() {return new ViewElement($('span.mat-simple-snack-bar-content'), "Captcha result popup")};
    get numberStarsSet() {return new ViewElement($('span.mat-slider-thumb-label-text'), "Number of stars has been set")};


    async enterComment(comment) {
        await allure.addStep("Entering feedback comment");
        await this.commentField.setValue(comment);
    };

    async sliderMoveRating() {
        await this.sliderToggle.click();
        await this.sliderToggle.dragAndDrop(56, 360); 
    };

    async enterCaptchaResult() {
        await allure.addStep("Entering captcha result");
        let question = await this.captchaQuestion.getText();
        await this.captchaResultField.setValue(eval(question));
    };

    async submitFeedback() {
        await allure.addStep("Submiting feedback comment");
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    };
};

module.exports = new CustomerFeedbackPage();