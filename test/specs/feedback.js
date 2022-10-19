const customerFeedbackPage = require("../../pages/customerFeedbackPage");
const homePage = require("../../pages/homePage");
const randomHelper = require("./randomHelper");
let comment = randomHelper.randomString(30, "aphabetical");


describe("Customer Feedback TC's", () => {

    before('Open page', async() => {
        await homePage.open();
    });

    afterEach('Go to Home page', async() => {
        await customerFeedbackPage.goToHomepage();
        await homePage.waitForPageAvailable();
    });

    it('Customer feedback 3 stars - check slider position', async() => {
        await homePage.goToCustomerFeedbackPage();
        await customerFeedbackPage.waitForPageAvailable();
        await customerFeedbackPage.enterComment(comment);
        await customerFeedbackPage.sliderMoveRating();
        chaiExpect(await customerFeedbackPage.numberStarsSet.getText()).to.include("3");
    });

    it('Customer feedback 3 stars - feedback submitting', async() => {
        await homePage.goToCustomerFeedbackPage();
        await customerFeedbackPage.waitForPageAvailable();
        await customerFeedbackPage.enterComment(comment);
        await customerFeedbackPage.sliderMoveRating();
        await customerFeedbackPage.enterCaptchaResult();
        await customerFeedbackPage.submitFeedback();
        await customerFeedbackPage.captchaResultPopup.waitForExist();
        await customerFeedbackPage.pause(1);
        chaiExpect(await customerFeedbackPage.captchaResultPopup.getText()).to.equal("Thank you for your feedback.");
    });
});