function stringValidation(string, number) {
  const symb = '…';
  if (string.length > number) {
    return string.slice(0, number - 1) + symb;
  }
  return undefined;
}

module.exports = stringValidation;
