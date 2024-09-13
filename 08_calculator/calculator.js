const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	if (num1 > num2) {
    return num1 - num2;
  }
  else {
    return num2 - num1;
  }
};

const sum = function(arr) {
  return arr.reduce((sum,current) => sum + current ,0);
};

const multiply = function(arr) {
  return arr.reduce((prod,current) => prod * current);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
  let fact = 1;
  for (i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
