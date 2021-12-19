function stringFirst(string) {
  const text = string.split(' ');
  for (let i = 0; i < text.length; i += 1) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  return text.join(' ');
}

module.exports = stringFirst;
