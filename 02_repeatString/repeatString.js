const repeatString = function(string, num) {
    let arr = [];

    for(i = 0; i < num; i++){
       arr.push(string); 
    }

    let str = arr.join("");

    return str;
};

// Do not edit below this line
module.exports = repeatString;
