function wordInLine(string, addstring, number) {
  const text = string.split(' ');
  text.splice(number + 1, 0, addstring);
  return text.join(' ');
}

module.exports = wordInLine;
