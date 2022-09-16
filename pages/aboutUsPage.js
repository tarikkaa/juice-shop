const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
let BasePage = require("./basePage");

class AboutUsPage extends BasePage {
    baseElement() {return new ViewElement($("h1, translate"), "About Us page base element")};
    get facebookButton() {return new WebButton($("[href*=facebook"), "Facebook button")};

    async goToFacebook() {
        await this.facebookButton.click();
    };
}

module.exports = new AboutUsPage();

