function countWord(string) {
  const symbols = {};
  string.split('').forEach((item) => {
    if (symbols[item]) {
      symbols[item] += 1;
    } else {
      symbols[item] = 1;
    }
  });
  // eslint-disable-next-line no-restricted-syntax
  for (const symbol in symbols) {
    if (symbols.hasOwnProperty(symbol)) {
      console.log(symbol, symbols[symbol]);
    }
  }
  return undefined;
}

module.exports = countWord;
