function checkType(variables) {
  if (typeof variables === 'number' && !Number.isNaN(variables)) {
    return 'number';
  }

  if (typeof variables === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = checkType;
