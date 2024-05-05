const removeFromArray = function(arr, rem) {

    let index = arr.indexOf(rem);
    
    arr.splice(index, 1);

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
