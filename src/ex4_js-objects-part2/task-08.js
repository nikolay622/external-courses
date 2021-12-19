function stringlowerCamelCase(string) {
  const text = string.split(' ');
  for (let i = 1; i < text.length; i += 1) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    text[0] = text[0].toLowerCase();
    text[i] = text[i].charAt(0) + text[i].substring(1).toLowerCase();
  }
  return text.join('');
}

module.exports = stringlowerCamelCase;
