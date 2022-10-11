const ViewElement = require("../elements/view.element");
const BasePage = require("./basePage");


class OrderCompletionPage extends BasePage {
    baseElement() {return new ViewElement($('h1[class="confirmation"]'), "Base element of the Order completion page")};
    get pageTitle() {return new ViewElement($('h1[class="confirmation"]'), "Title of the Order completion page")};

    async getPageTitle() {
        return await this.pageTitle.getText();
    };
};

module.exports = new OrderCompletionPage();