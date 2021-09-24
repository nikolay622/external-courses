function objectKeys(object) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        console.log(key, object[key]);
      }
    }
  }
  
  module.exports = objectKeys;