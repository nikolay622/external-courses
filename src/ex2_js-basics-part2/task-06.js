function numberChecks(number) {
  if (number > 1000 || number < 0) {
    return 'Данные неверны';
  }

  if (number === 0 || number === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return `Число ${number} - составное число`;
    }
  }

  return `Число ${number} - простое число`;
}

module.exports = numberChecks;
