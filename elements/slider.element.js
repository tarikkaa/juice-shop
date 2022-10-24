const BaseElement = require("./base.element");

class SliderElement extends BaseElement {


    async dragAndDrop(x_px, y_px){
        console.log(`Drag and Drop element to: x=${x_px}px, y=${y_px}px`)
        await this.wdioElement.dragAndDrop({x: x_px, y: y_px});
    };

    async getLocation(){
        console.log(`Getting location of the element: ${this.elementName}`);
        location = await this.wdioElement.getLocation();
        return location;
    };  
}

module.exports = SliderElement;
