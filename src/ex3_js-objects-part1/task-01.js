function addObjectProperty() {
    const user = {};
  
    user.name = 'Nikolay';
    user.age = 90;
    user.married = false;
    delete user.age;
  
    return user;
  }
  
  module.exports = addObjectProperty;  
