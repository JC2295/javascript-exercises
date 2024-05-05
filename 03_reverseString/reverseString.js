const reverseString = function(str) {

    let arr = str.split("");

    revArr = [];

    for(let i = arr.length; i >= 0; i--){
        revArr.push(arr[i]);
    }

    let revStr = revArr.join("");

    return revStr;

};

// Do not edit below this line
module.exports = reverseString;
