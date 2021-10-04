function reduce(array, callback, initialValue) {
  let i = 0;
  let previousValue = initialValue;
  if (initialValue === undefined) {
    i = 1;
    previousValue = array[0];
  } else {
    previousValue = initialValue;
  }

  for (i; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }
  return previousValue;
}

module.exports = reduce;
