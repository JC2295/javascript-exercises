const convertToCelsius = function(fTemp) {
  let cTemp = ((fTemp - 32) * 5 )/ 9;
  
  cTemp.toFixed(1);

  if(cTemp == 0.0){
    return 0;
  }
  else{
    return cTemp;
  }

  
};

const convertToFahrenheit = function(cTemp) {

  let fTemp = ((cTemp * 9) / 5) + 32;
  //console.log(fahrenheit);
  fTemp.toFixed(1);

  if(fTemp == 0.0){
    return 0;
  }
  else{
    return fTemp;
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
