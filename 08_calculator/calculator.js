const add = function(var1, var2) {
	return (var1 + var2);
};

const subtract = function(var1, var2) {
	return (var1 - var2);
};

const sum = function(arr) {
	let total = arr.reduce((acc, curr) => {
    return (acc + curr)
  }, 0)
  return total;
};

const multiply = function(arr) {
  let prod = arr.reduce((acc, curr) => (acc * curr), 1);
  return prod;
};

const power = function(var1, var2) {
	return Math.pow(var1, var2);
};

const factorial = function(num) {
	if (num == 0) return 1;
  let numArr = [...Array(num).keys()];
  numArr.shift();
  numArr.push(num);
  return numArr.reduce((acc, curr) => acc *= curr, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
