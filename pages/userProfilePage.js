const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");
const InputElement = require("../elements/input.element");
const path = require('path');

class UserProfilePage extends BasePage {
    baseElement() {return new ViewElement($('input#email'), "Base element of the User Profile page")};
    get chooseFile() {return new InputElement($('input#picture'), "Choose file button")};
    get uploadPictureButton() {return new WebButton($('//button[contains(@aria-label, "upload")]'), "Upload picture button")};
    get imageUrlField() {return new InputElement($('input#url'), "Image URL input field")};
    get linkImageButton() {return new WebButton($('//button[contains(@aria-label, "link")]'), "Link image button")};

    
    async uploadProfilePicture(imagePath){
        await allure.addStep(`Uploading file from the path: ${imagePath}`);
        let filePath = path.join(__dirname, imagePath);
        let remoteFilePath = await browser.uploadFile(filePath);
        await this.chooseFile.setValue(remoteFilePath);
        await this.uploadPictureButton.click()
    };

    async linkProfileImage(link) {
        await allure.addStep("Linking image to the user profile");
        await this.imageUrlField.setValue(link);
        await this.linkImageButton.click();
    };
};

module.exports = new UserProfilePage();