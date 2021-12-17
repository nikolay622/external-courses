/* eslint-disable max-len */
const request = (url, method = 'GET', body = {}, formatJSON = true) => new Promise((resolve, reject) => {
  const xmr = new XMLHttpRequest();

  xmr.open(method, url, true);

  // eslint-disable-next-line no-unused-expressions
  method === 'GET' ? xmr.send(JSON.stringify(body)) : xmr.send();

  xmr.onreadystatechange = function () {
    if (this.readyState != 4) {
      return null;
    }

    if (this.status != 200) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ status: this.status, statusText: this.statusText });
    }

    return resolve({ status: 200, body: formatJSON ? JSON.parse(this.responseText) : this.responseText });
  };
});

const xxx = request('https://jsonplaceholder.typicode.com/posts', 'get', { name: 'Nikolay' }).then((users) => {
  console.log(users);
}, (error) => {
  console.log(error);
});
console.log(xxx);
