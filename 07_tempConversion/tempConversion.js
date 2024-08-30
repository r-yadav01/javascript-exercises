const convertToCelsius = function(tempFahr) {
  let tempCels = (tempFahr - 32) * 5/9;
  tempCels = parseFloat(tempCels.toFixed(1));
  return tempCels;
};

const convertToFahrenheit = function(tempCels) {
  let tempFahr = (tempCels * 9/5) + 32;
  tempFahr = parseFloat(tempFahr.toFixed(1));
  return tempFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
