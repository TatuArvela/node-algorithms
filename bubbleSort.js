function bubbleSort(_array) {
  const array = _array.slice();

  let n = array.length;
  while (n > 1) {
    let newn = 0;
    for (let i = 1; i <= n - 1; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        newn = i;
      }
    }
    n = newn;
  }

  return array;
}

export default bubbleSort;
