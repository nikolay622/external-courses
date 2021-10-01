function deepClone(object) {
  let result;

  if (Array.isArray(object)) {
    result = [];
  } else {
    result = {};
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof object[key] === 'object') {
        result[key] = deepClone(object[key]);
      } else {
        result[key] = object[key];
      }
    }
  }

  return result;
}

module.exports = deepClone;
