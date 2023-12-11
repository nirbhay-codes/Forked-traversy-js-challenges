/* // Solution 1
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result;
} */

/* // Solution 2
function calculator(num1, num2, operator) {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else {
    throw new Error('Invalid operation');
  }
  return result;
} */

// Solution 3 (Optimized)
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
};

function calculator(num1, num2, operator) {
  if (!(operator in operations)) throw new Error('Invalid operation');
  return operations[operator](num1, num2);
}

module.exports = calculator;
