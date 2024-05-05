const sumAll = function(num1, num2) {

    let tot = 0;

    if(num1 > num2){

        for(let i = num2; i <= num1; i++){
            tot += i;
        }

        return tot;
    }
    else if(num2 > num1){

        for(let i = num1; i <= num2; i++){
            tot += i;
        }

        return tot;

    }
    else{
        return num1 + num2;
    }

};

// Do not edit below this line
module.exports = sumAll;
