function slice(array, begin = 0, end = array.length) {
  const arr = [];

  let start = begin;
  start = (start >= 0) ? start : array.length + start;

  let stop = end;
  if (end < 0) {
    stop = array.length + end;
  }

  for (let i = start; i < stop; i += 1) {
    arr.push(array[i]);
  }
  return arr.filter(Boolean);
}

module.exports = slice;
