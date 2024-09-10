const convertToCelsius = function(fDegree) {
  let cTemp = 0;
  cTemp = (fDegree - 32) * 5/9 ;
  return parseFloat(cTemp.toFixed(1));
};

const convertToFahrenheit = function(cDegree) {
  let fTemp = 0;
  fTemp = (cDegree * 9/5) + 32
  return parseFloat(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
