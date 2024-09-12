function checkingCreatingObject(string, object) {
  const newObject = object;

  if (!newObject.hasOwnProperty(string)) {
    newObject[string] = 'new';
  }

  return newObject;
}

module.exports = checkingCreatingObject;
