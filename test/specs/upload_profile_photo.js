const homePage = require("../../pages/homePage");
const userProfilePage = require("../../pages/userProfilePage");
const loginPage = require("../../pages/loginPage");
const registration = require("../../pages/registrationPage.js");
const randomHelper = require("./randomHelper");

let randomEmail = randomHelper.randomString(5, "alphabetic") + "@test.com";
let randomPassword = randomHelper.randomString(8, "alphanumeric") + "!!!";

let filePath = "../test/data/profile_photo.png";
let fileLink = "https://m.media-amazon.com/images/I/91-Db4L6xjL.png";





describe("User profile TC's", () => {

    before('Open page', async() => {
        await homePage.open();
        await homePage.openLoginPage();
        await loginPage.goToRegistration();
        await registration.registration(randomEmail, randomPassword);
        await loginPage.login(randomEmail, randomPassword);
        await homePage.waitForPageAvailable();  
    });

    afterEach("Go to Homepage", async() => {
        await userProfilePage.goToHomepage();
        await homePage.waitForPageAvailable();
    })

    it('Upload user photo', async() => {
        await homePage.goToUserProfilePage();
        await userProfilePage.waitForPageAvailable();
        await userProfilePage.uploadProfilePicture(filePath);
        await userProfilePage.pause(2);   
    });

    it("Link image to the user profile", async() => {
        await homePage.goToUserProfilePage();
        userProfilePage.waitForPageAvailable();
        await userProfilePage.linkProfileImage(fileLink);
        await userProfilePage.pause(2);
    });
})