const Calculator = {

  value: 0,

  add(number) {
    if (number) {
      this.value += number;
    }

    return this;
  },
  subtract(number) {
    if (number) {
      this.value -= number;
    }
    return this;
  },
  divide(number) {
    if (number) {
      this.value /= number;
    }
    return this;
  },
  multiply(number) {
    if (number) {
      this.value *= number;
    }
    return this;
  },
  setState(number) {
    if (number) {
      this.value = number;
    }
    return this;
  },
  getResult() {
    return this.value;
  },
  reset() {
    this.value = 0;
    return this;
  },
  fetchData(callback) {
    setTimeout(() => callback(500), 500);
  },

};
module.exports = Calculator;
