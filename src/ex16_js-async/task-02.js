document.addEventListener('DOMContentLoaded', () => {
  const input = document.createElement('input');
  document.body.append(input);
  const h2 = document.createElement('h2');
  document.body.append(h2);
  let timeout;

  function enteringText() {
    const text = input.value;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      h2.innerHTML = text;
    }, 1000);
  }

  input.addEventListener('input', enteringText);
});

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.createElement('input');
  document.body.append(inputs);
  const h = document.createElement('h2');
  document.body.append(h);

  function Texts() {
    const texts = inputs.value;
    h.innerHTML = texts;
  }

  inputs.addEventListener('input', Texts);
});
