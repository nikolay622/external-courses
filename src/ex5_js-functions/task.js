function Calculator() {
  let result = 0;

  function add(val = 0) {
    result += val;
    return add;
  }

  function subtract(val = 0) {
    result -= val;
    return subtract;
  }

  function divide(val = 1) {
    result /= val;
    return divide;
  }

  function multiply(val = 1) {
    result *= val;
    return multiply;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const calculator = new Calculator();

module.exports = calculator;
