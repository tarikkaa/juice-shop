
let randomstring = require("randomstring");

class RandomHelper{

    randomString(leng, chars){
        return randomstring.generate({
        length: leng,
        charset: chars
        });
    };
    
    randomNumber(min, max) {  
        return Math.floor(
          Math.random() * (max - min + 1) + min
        )
    };
    
    randomFromList(list) {
        return list[Math.floor((Math.random()*list.length))];
    };
}

module.exports = new RandomHelper();