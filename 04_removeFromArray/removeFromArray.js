const removeFromArray = function(arr, rem) {

    arr.map(function (value) => {
        if (value === rem){
            let splArr = arr.splice((arr.findIndex(value)), 1);

            return splArr;
        }
    });



};

// Do not edit below this line
module.exports = removeFromArray;
