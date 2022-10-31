const WebButton = require("../elements/button.element");
const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");

class FacebookMainPage extends BasePage{
    baseElement() {return new ViewElement($('svg[aria-label="Your profile"]'), "Facebook main page base element")};
    get accountButton() {return new WebButton($('svg[aria-label="Your profile"]'), "Facebook main page account button")};

}

module.exports = new FacebookMainPage();