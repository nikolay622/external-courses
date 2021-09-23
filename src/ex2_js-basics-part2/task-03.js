function outputCountNumbers(array) {
  let evenNumbers = 0;
  let oddNumbers = 0;
  let zeroNumbers = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'number') {
      if (array[i] === 0) {
        zeroNumbers += 1;
      } else if (array[i] % 2 === 0) {
        evenNumbers += 1;
      } else {
        oddNumbers += 1;
      }
    }
  }

  return [evenNumbers, oddNumbers, zeroNumbers];
}

module.exports = outputCountNumbers;
